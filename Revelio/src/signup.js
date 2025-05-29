import React, { useState } from "react";
import axios from "axios"; // <-- import axios
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
const Signup = () => {
  // State hooks for each field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend endpoint
      if (!passwordRegex.test(password)) {
      alert("Password too weak. Must be 8+ chars, 1 number, 1 special char.");
      return;}

      const response = await axios.post("http://localhost:5000/api/users/signup", {
        name,
        email,
        phone,
        address,
        password,
        confirmPassword,
      });

      // If successful, the server responds with { message: "User created successfully" }
      alert(response.data.message);

      // Optionally, clear the form or redirect the user
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setPassword("");
      setConfirmPassword("");

    } catch (error) {
      // Handle errors (e.g., 400, 500)
      if (error.response) {
        // Server responded with an error status
        alert(error.response.data.message);
      } else {
        // Something else went wrong (network error, etc.)
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div style={{ marginTop: "80px", textAlign: "center" }}>
      <h2>Signup</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          textAlign: "left",
          backgroundColor: "#FFFFFF11",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        {/* Name Field */}
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        {/* Phone Field */}
        <div style={{ marginBottom: "10px" }}>
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        {/* Address Field */}
        <div style={{ marginBottom: "10px" }}>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        {/* Confirm Password Field */}
        <div style={{ marginBottom: "10px" }}>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" style={buttonStyle}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

// Reusable styles
const inputStyle = {
  width: "100%",
  padding: "8px",
  marginTop: "5px",
  boxSizing: "border-box",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  backgroundColor: "#1ABC9C",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default Signup;
