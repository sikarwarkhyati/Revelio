import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Left Section: Contact Info */}
        <div style={styles.section}>
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:support@revelio.com" style={styles.link}>support@revelio.com</a></p>
          <p>Phone: <a href="tel:+1234567890" style={styles.link}>+1 234 567 890</a></p>
          <p>Phone: <a href="tel:+9876543210" style={styles.link}>+9 876 543 210</a></p>
        </div>

        {/* Middle Section: Quick Links */}
        <div style={styles.section}>
          <h3>Quick Links</h3>
          <ul style={styles.list}>
            <li><a href="/about" style={styles.link}>About Us</a></li>
            <li><a href="/careers" style={styles.link}>Careers</a></li>
            <li><a href="/privacy" style={styles.link}>Privacy Policy</a></li>
            <li><a href="/terms" style={styles.link}>Terms of Service</a></li>
            <li><a href="/faq" style={styles.link}>FAQs</a></li>
          </ul>
        </div>

        {/* Right Section: Social Media */}
        <div style={styles.section}>
          <h3>Follow Us</h3>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook" style={styles.icon}></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter-x" style={styles.icon}></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram" style={styles.icon}></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin" style={styles.icon}></i>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div style={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Revelio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#333",
    color: "#fff",
    padding: "20px 0",
    marginTop: "30px",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "start",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    flexWrap: "wrap",
  },
  section: {
    flex: 1,
    minWidth: "250px",
    padding: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    display: "block",
    marginBottom: "5px",
  },
  socialIcons: {
    display: "flex",
    gap: "15px",
  },
  icon: {
    fontSize: "24px",
    color: "#fff",
    transition: "0.3s",
  },
  bottomBar: {
    textAlign: "center",
    padding: "10px 0",
    borderTop: "1px solid #444",
    marginTop: "10px",
  },
};

export default Footer;
