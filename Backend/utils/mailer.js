// utils/mailer.js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,                        // e.g. "smtp.gmail.com"
  port: Number(process.env.SMTP_PORT) || 587,         // cast to number, default to 587
  secure: process.env.SMTP_SECURE === "true",         // true for port 465
  auth: {
    user: process.env.SMTP_USER,                      // your Gmail address
    pass: process.env.SMTP_PASS,                      // your App Password
  },
  tls: {
    // Only use this if you run into certificate issues
    rejectUnauthorized: false,
  },
});

// Optional: verify connection configuration on startup
transporter.verify((err, success) => {
  if (err) {
    console.error("❌ Mailer config error:", err);
  } else {
    console.log("✅ Mailer is ready to send messages");
  }
});

module.exports = transporter;
