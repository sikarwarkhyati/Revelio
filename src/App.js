import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import EventsPage from "./EventsPage";
import Community from "./Community";
import Blog from "./Bts";
import Footer from "./Footer";
import Carousel from "./Carousel";
import UpcomingEvents from "./UpcomingEvents";
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from "./login";
import "./App.css"; // Import your CSS file

const App = () => {
  // Simulating a logged-in user for design purposes
  const [user, setUser] = useState({ name: "John Doe" }); // Simulated logged-in user

  return (
    <div
      className="App-container"
      style={{
        background: "linear-gradient(45deg, #2C3E50, #1ABC9C)",
        backgroundSize: "400% 400%",
        animation: "moveBackground 8s infinite linear",
        minHeight: "100vh",
        color: "#F3F1E8",
        fontFamily: "Arial, sans-serif",
        overflowX: "hidden", // Prevent horizontal scrolling
      }}
    >
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Carousel />
              <UpcomingEvents />
            </>
          }
        />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/community"
          // Since we're simulating a logged-in user, we're rendering the Community page directly
          element={user ? <Community user={user} /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/login"
          element={<Login setUser={setUser} />} // Set the user upon login (simulated)
        />
      </Routes>

      <Footer />

      {/* Simulate login for design purposes */}
      <button onClick={() => setUser({ name: "John Doe" })}>Login (Simulate)</button>
    </div>
  );
};

export default App;
