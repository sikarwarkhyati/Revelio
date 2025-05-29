// src/EmailVerified.js
import React from "react";
import { Link } from "react-router-dom";

export default function EmailVerified() {
  return (
    <div style={{
      padding: "80px 20px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ color: "#1ABC9C", fontSize: "2.5rem" }}>
        Thank You! 🎉
      </h1>
      <p style={{ fontSize: "1.2rem", margin: "20px 0" }}>
        Your email has been successfully verified.
      </p>
      <Link
        to="/login"
        style={{
          display: "inline-block",
          marginTop: 20,
          padding: "12px 24px",
          backgroundColor: "#2C3E50",
          color: "#F3F1E8",
          borderRadius: 5,
          textDecoration: "none",
          fontSize: "1rem"
        }}
      >
        Go to Login
      </Link>
    </div>
  );
}
