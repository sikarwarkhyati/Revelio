// userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

// @route  POST /api/users/signup
// @desc   Create a new user
router.post("/signup", async (req, res) => {
  try {
    const { name, email, phone, address, password, confirmPassword } = req.body;

    // Basic Validation
    if (!name || !email || !phone || !address || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use." });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(201).json({ message: "User created successfully." });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Server error during signup." });
  }
});

// @route  POST /api/users/login
// @desc   Validate user credentials and generate JWT
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate fields
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Compare provided password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Respond with token and user data
    return res.status(200).json({
      message: "Login successful!",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error during login." });
  }
});

// @route  PUT /api/users/update
// @desc   Update user info (protected route, supports profile pic upload)
router.put("/update", auth, upload.single("profilePic"), async (req, res) => {
  try {
    const { oldPassword, name, email, address, newPassword } = req.body;
    // The auth middleware puts the userId in req.user.userId
    const userId = req.user.userId;

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Verify old password
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Old password is incorrect." });
    }

    // Update fields if provided
    if (name) user.name = name;
    if (email) user.email = email;
    if (address) user.address = address;
    if (newPassword) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
    }

    // If a new profile picture was uploaded, update profilePicPath
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
        profilePicPath: updatedUser.profilePicPath, // <-- uncommented!
      },
    });
    
  } catch (error) {
    console.error("Update error:", error);
    return res.status(500).json({ message: "Server error during update." });
  }
});

module.exports = router;
