const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const router = express.Router();
const User = require("../models/User");
const auth = require("../middleware/auth");
const transporter = require("../utils/mailer");

const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

// @route POST /api/users/signup
// @desc  Register a new user and send verification & welcome emails
router.post("/signup", async (req, res) => {
  try {
    const { name, email, phone, address, password, confirmPassword } = req.body;

    // Field validation
    if (!name || !email || !phone || !address || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message: "Password must be at least 8 characters long, with at least one number and one special character.",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const newUser = new User({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      verificationToken,
      isVerified: false,
    });

    await newUser.save();

    const verifyUrl = `${process.env.APP_BASE_URL}/verify-email?token=${verificationToken}`;

    // Send verification email
    try {
      await transporter.sendMail({
        from: `"Revelio" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Verify your Revelio account",
        html: `
          <div style="font-family:sans-serif; line-height:1.5;">
            <h2>Hi ${name}, welcome to Revelio! 🎉</h2>
            <p>Click the button below to verify your email address:</p>
            <a href="${verifyUrl}" style="background:#1ABC9C;color:white;padding:10px 20px;border-radius:5px;text-decoration:none;">
              Verify My Email
            </a>
            <p>Or copy & paste this link: <br/><code>${verifyUrl}</code></p>
            <p style="color:#888;">If you didn’t sign up, ignore this email.</p>
          </div>
        `,
      });
    } catch (emailErr) {
      console.error("Failed to send verification email:", emailErr);
    }

    // Send welcome email
    try {
      await transporter.sendMail({
        from: `"Revelio" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Thanks for joining Revelio!",
        html: `<p>Hi ${name}, thanks for signing up for Revelio!</p>`,
      });
    } catch (emailErr) {
      console.error("Failed to send welcome email:", emailErr);
    }

    return res.status(201).json({ message: "Signup successful! Check your email to verify your account." });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Server error during signup." });
  }
});

// @route GET /api/users/verify-email
// @desc  Verify email address via token
router.get("/verify-email", async (req, res) => {
  try {
    const { token } = req.query;
    if (!token) return res.status(400).send("Missing verification token.");

    const user = await User.findOne({ verificationToken: token });
    if (!user) return res.status(400).send("Invalid or expired token.");

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    console.log(`User ${user.email} verified.`);

    return res.redirect(`${process.env.APP_BASE_URL}/email-verified`);
  } catch (err) {
    console.error("Verification error:", err);
    return res.status(500).send("Server error during verification.");
  }
});

// @route POST /api/users/login
// @desc  Authenticate user and issue token
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: "Email and password are required." });

    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    if (!user.isVerified) return res.status(403).json({ message: "Please verify your email first." });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    return res.status(200).json({
      message: "Login successful!",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error during login." });
  }
});

// @route PUT /api/users/update
// @desc  Update user profile (requires auth)
router.put("/update", auth, upload.single("profilePic"), async (req, res) => {
  try {
    const { oldPassword, name, email, address, newPassword } = req.body;
    const userId = req.user.userId;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found." });

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) return res.status(401).json({ message: "Old password is incorrect." });

    if (name) user.name = name;
    if (email) user.email = email;
    if (address) user.address = address;

    if (newPassword) {
      if (!passwordRegex.test(newPassword)) {
        return res.status(400).json({
          message: "New password must be at least 8 characters long and include a number and special character.",
        });
      }
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
    }

    if (req.file) {
      user.profilePicPath = req.file.path;
    }

    const updatedUser = await user.save();

    return res.status(200).json({
      message: "Account updated successfully!",
      updatedUser: {
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        address: updatedUser.address,
        profilePicPath: updatedUser.profilePicPath,
      },
    });
  } catch (err) {
    console.error("Update error:", err);
    return res.status(500).json({ message: "Server error during update." });
  }
});

module.exports = router;
