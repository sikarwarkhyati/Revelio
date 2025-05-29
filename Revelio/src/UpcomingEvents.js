import React, { useState } from "react";

import Calendar from "./Calendar";
import Map from "./Map";

const upcomingEvents = [
  {
    id: 1,
    image: process.env.PUBLIC_URL + "/Images/Upcomingevents1.jpg",
    title: "Cultural Fest 2023",
    date: "12th Nov, 2025",
    location: "University Hall",
    category: "Cultural",
  },
  {
    id: 2,
    image: process.env.PUBLIC_URL + "/Images/Upcomingevents1.jpg",
    title: "Annual Sports Meet",
    date: "22nd Nov, 2025",
    location: "Sports Complex",
    category: "Sports",
  },
  {
    id: 3,
    image: process.env.PUBLIC_URL + "/Images/Upcomingevents1.jpg",
    title: "Tech Symposium",
    date: "30th Nov, 2025",
    location: "Tech Auditorium",
    category: "Technical",
  },
];

const UpcomingEvents = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const filteredEvents = upcomingEvents.filter((event) => {
    return (
      event.title.toLowerCase().includes(search.toLowerCase()) &&
      (category ? event.category === category : true) &&
      (location ? event.location.toLowerCase().includes(location.toLowerCase()) : true)
    );
  });

  return (
    <div style={{ display: "flex", padding: "20px", color: "#000" }}>
      {/* Filters Sidebar */}
      <div
        style={{
          width: "250px",
          padding: "15px",
          borderRight: "2px solid #ddd",
          background: "#f9f9f9",
          color: "#000",
        }}
      >
        <h2 style={{ color: "#000" }}>Smart Search & Filters</h2>
        <input
          type="text"
          placeholder="Search events"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", marginTop: "5px", fontSize: "1.2em" }}
        />
        <h3>Filter by Category</h3>
        <select onChange={(e) => setCategory(e.target.value)} style={{ width: "100%", padding: "8px", marginTop: "5px", fontSize: "1.2em" }}>
          <option value="">All</option>
          <option value="Cultural">Cultural</option>
          <option value="Sports">Sports</option>
          <option value="Technical">Technical</option>
        </select>
        <h3>Filter by Location</h3>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "5px", fontSize: "1.2em" }}
        />
      </div>

      {/* Events Display */}
      <div style={{ flexGrow: 1, paddingLeft: "20px" }}>
        <h2>Upcoming Events</h2>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div
                key={event.id}
                style={{ width: "200px", padding: "10px", borderRadius: "8px", textAlign: "center", background: "white" }}
              >
                <img src={event.image} alt={event.title} style={{ width: "100%", borderRadius: "8px" }} />
                <h3>{event.title}</h3>
                <p><b>Date:</b> {event.date}</p>
                <p><b>Location:</b> {event.location}</p>
                <button style={{ background: "#007bff", color: "white", padding: "8px", borderRadius: "5px", cursor: "pointer" }}>Get Tickets</button>
              </div>
            ))
          ) : (
            <p>No events found.</p>
          )}
        </div>

        {/* Interactive Calendar & Map */}
        <h2>Interactive Calendar & Map</h2>
        <div style={{ display: "flex", gap: "15px", marginTop: "20px", padding: "20px", background: "#eef2f3", borderRadius: "8px" }}>
          <div style={{ flex: 1 }}>
            <Calendar />
          </div>
          <div style={{ flex: 1 }}>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
