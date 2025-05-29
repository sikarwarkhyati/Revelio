import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // On navbar mount or refresh, check if user is in localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      setCurrentUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
    navigate("/"); // go back to home
  };

  const navbarStyle = {
    backgroundColor: "#2C3E50",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    width: "100%",
    top: "0",
    left: "0",
    zIndex: 1000,
    boxSizing: "border-box",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "50px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    alignItems: "center",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#F3F1E8",
    fontSize: "18px",
    fontWeight: "500",
    transition: "color 0.3s ease-in-out",
    lineHeight: 1.2,
  };

  const linkHoverStyle = {
    color: "#E67E22",
  };

  const authContainerStyle = {
    display: "flex",
    gap: "15px",
  };

  const authButtonStyle = {
    backgroundColor: "#1ABC9C",
    color: "#F3F1E8",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s ease-in-out",
    whiteSpace: "nowrap",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const authButtonHoverStyle = {
    backgroundColor: "#E67E22",
  };

  return (
    <nav style={navbarStyle}>
      {/* Left: Clickable Logo */}
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>
        <Link
          to="/"
          style={{
            ...linkStyle,
            textDecoration: "none",
            color: "#F3F1E8",
          }}
          onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
        >
          Revelio
        </Link>
      </div>

      {/* Middle: Navigation Links */}
      <ul style={navLinksStyle}>
        <li>
          <Link
            to="/"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            to="/community"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
          >
            Community
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
          >
            Blog
          </Link>
        </li>
      </ul>

      {/* Right: If logged in -> profile area; if not -> Login/Signup */}
      <div style={authContainerStyle}>
        {currentUser ? (
          // If user is logged in
          <>
            {/* Profile Icon or Avatar */}
            <div
              style={{
                ...authButtonStyle,
                backgroundColor: "#2C3E50",
                cursor: "default",
              }}
            >
              {currentUser.profilePicPath ? (
                <img
                  src={`http://localhost:5000/${currentUser.profilePicPath}`}
                  alt="Profile"
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    marginRight: 8,
                  }}
                />
              ) : (
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: "#ccc",
                    display: "inline-block",
                    marginRight: 8,
                  }}
                />
              )}
              {currentUser.name}
            </div>

            {/* "Account" link */}
            <Link
              to="/account"
              style={authButtonStyle}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor =
                  authButtonHoverStyle.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = authButtonStyle.backgroundColor)
              }
            >
              Account
            </Link>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              style={authButtonStyle}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor =
                  authButtonHoverStyle.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = authButtonStyle.backgroundColor)
              }
            >
              Logout
            </button>
          </>
        ) : (
          // If user is NOT logged in
          <>
            <Link
              to="/login"
              style={authButtonStyle}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor =
                  authButtonHoverStyle.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = authButtonStyle.backgroundColor)
              }
            >
              Login
            </Link>
            <Link
              to="/signup"
              style={authButtonStyle}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor =
                  authButtonHoverStyle.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = authButtonStyle.backgroundColor)
              }
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
