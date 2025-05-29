// account.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Account = () => {
  const [currentUser, setCurrentUser] = useState(null);

  // Fields for updating user info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // Profile pic local preview & uploading
  const [profilePic, setProfilePic] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  useEffect(() => {
    // Load user data from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setCurrentUser(parsedUser);
      setName(parsedUser.name || "");
      setEmail(parsedUser.email || "");
      // setAddress(parsedUser.address || "");
    }
  }, []);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setPreviewURL(URL.createObjectURL(file)); // local preview
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert("New passwords do not match!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("oldPassword", oldPassword);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("address", address);
      formData.append("newPassword", newPassword);
      if (profilePic) {
        formData.append("profilePic", profilePic);
      }

      const token = localStorage.getItem("token");

      const res = await axios.put("http://localhost:5000/api/users/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert(res.data.message);

      if (res.data.updatedUser) {
        // Save updated user in localStorage
        localStorage.setItem("user", JSON.stringify(res.data.updatedUser));
        setCurrentUser(res.data.updatedUser);

        // If server returned a new profilePicPath, clear local preview
        // so we can show the actual server-hosted image
        if (res.data.updatedUser.profilePicPath) {
          setPreviewURL(null);
          setProfilePic(null);
        }
      }

      // Clear password fields
      setOldPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  };

  // Construct a server URL for the uploaded file
  // If currentUser has a profilePicPath like "uploads/abc123.jpg"
  // This becomes "http://localhost:5000/uploads/abc123.jpg"
  const serverPicURL = currentUser?.profilePicPath
    ? `http://localhost:5000/${currentUser.profilePicPath}`
    : null;

  return (
    <div style={{ marginTop: "80px", textAlign: "center" }}>
      <h2>Account Page</h2>

      {currentUser ? (
        <div>
          <p>Welcome, {currentUser.name}</p>

          {/* Show the local preview if user selected a new file */}
          {/* Otherwise, show the server-hosted pic if it exists */}
          <div style={{ marginBottom: "20px" }}>
            {previewURL ? (
              <img
                src={previewURL}
                alt="Local Preview"
                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              />
            ) : serverPicURL ? (
              <img
                src={serverPicURL}
                alt="Server Profile"
                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              />
            ) : (
              <p>No profile picture</p>
            )}
          </div>

          <form
            onSubmit={handleUpdate}
            style={{
              maxWidth: "400px",
              margin: "20px auto",
              textAlign: "left",
              backgroundColor: "#FFFFFF11",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            <div style={{ marginBottom: "10px" }}>
              <label>Profile Picture:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePicChange}
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>Address:</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>Old Password (for verification):</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                style={inputStyle}
                required
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>New Password:</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>Confirm New Password:</label>
              <input
                type="password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                style={inputStyle}
              />
            </div>

            <button type="submit" style={buttonStyle}>
              Update Account
            </button>
          </form>
        </div>
      ) : (
        <p>Please log in first.</p>
      )}
    </div>
  );
};

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
export default Account;
