import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated login logic (replace with real authentication logic)
    const { username, password } = formData;
    if (username === "Khyati" && password === "1234") {
      setUser({ username });
      navigate("/community"); // Redirect to Community page after login
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1C1C1C",
        color: "#F3F1E8",
        textAlign: "center",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          padding: "30px",
          borderRadius: "12px",
          width: "90%",
          maxWidth: "400px",
        }}
      >
        <h2>Welcome Back!</h2>
        <p>Please log in to access the Community Hub.</p>

        {/* Error Message */}
        {error && (
          <p
            style={{
              color: "#FF4D4D",
              marginBottom: "10px",
            }}
          >
            {error}
          </p>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              outline: "none",
              width: "100%",
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              outline: "none",
              width: "100%",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              border: "none",
              background: "#1ABC9C",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Login
          </button>
        </form>

        {/* Link to go back to Home */}
        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          New here?{" "}
          <a
            href="/signup"
            style={{
              color: "#1ABC9C",
              textDecoration: "none",
            }}
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
