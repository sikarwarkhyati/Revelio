import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
  backgroundColor: "#2C3E50", // Dark Blue-Gray
  padding: "15px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  width: "100%",
  top: "0",
  left: "0",
  zIndex: "1000",
  boxSizing: "border-box",
};

const navLinksStyle = {
  display: "flex",
  gap: "40px", // Increased gap for better spacing
  listStyle: "none",
  margin: "0",
  padding: "0",
};

const linkStyle = {
  textDecoration: "none",
  color: "#F3F1E8", // Light Beige (for contrast)
  fontSize: "18px",
  fontWeight: "500",
  transition: "color 0.3s ease-in-out",
};

const linkHoverStyle = {
  color: "#E67E22", // Sunset Orange (Hover)
};

const authContainerStyle = {
  display: "flex",
  gap: "15px", // Space between Login & Signup
};

const authButtonStyle = {
  backgroundColor: "#1ABC9C", // Calm Aqua Green (Accent)
  color: "#F3F1E8",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  transition: "background 0.3s ease-in-out",
  whiteSpace: "nowrap", // Prevents text wrapping
};

const authButtonHoverStyle = {
  backgroundColor: "#E67E22", // Sunset Orange on Hover
};



  return (
    <nav style={navbarStyle}>
      {/* Left: Company Name */}
      <div style={{ color: "#F3F1E8", fontSize: "22px", fontWeight: "bold" }}>
        Revelio
      </div>

      {/* Middle: Navigation Links */}
      <ul style={navLinksStyle}>
        <li>
          <Link to="/" style={linkStyle} onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)} onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}>Home</Link>
        </li>
        <li>
          <Link to="/events" style={linkStyle} onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)} onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}>Events</Link>
        </li>
        <li>
          <Link to="/community" style={linkStyle} onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)} onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}>Community</Link>
        </li>
        <li>
          <Link to="/blog" style={linkStyle} onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)} onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}>Blog</Link>
        </li>
      </ul>

      {/* Right: Login & Signup Buttons */}
      <div>
        <button
          style={authButtonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = authButtonHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = authButtonStyle.backgroundColor)}
        >
          Login
        </button>
        <button
          style={{ ...authButtonStyle, marginLeft: "10px" }} // Adjusted margin to prevent overflow
          onMouseEnter={(e) => (e.target.style.backgroundColor = authButtonHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = authButtonStyle.backgroundColor)}
        >
          Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
