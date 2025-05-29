import React from 'react';

const events = [
  {
    id: 1,
    title: 'Tech Talk: AI in 2025',
    date: 'April 15, 2025',
    time: '2:00 PM',
    location: 'Auditorium A',
    category: 'Technical',
    description: 'Join us for an exciting talk on the future of AI by industry experts.',
  },
  {
    id: 2,
    title: 'Cultural Fest - Udaan',
    date: 'April 17, 2025',
    time: '5:00 PM',
    location: 'Main Ground',
    category: 'Cultural',
    description: 'An evening filled with music, dance, and drama performances!',
  },
  {
    id: 3,
    title: 'Football Tournament Finals',
    date: 'April 19, 2025',
    time: '4:00 PM',
    location: 'College Stadium',
    category: 'Sports',
    description: 'Cheer for your favorite team in the Inter-college Football Finals.',
  },
];

const EventsPage = () => {
  const containerStyle = {
  padding: '100px 20px 60px 20px',
  background: 'inherit', // Unified background
  minHeight: '100vh',
  fontFamily: 'Arial, sans-serif',
};



  const headerStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '40px',
  };

  const eventCardStyle = {
    background: 'white',
    borderRadius: '12px',
    padding: '20px',
    margin: '20px auto',
    width: '90%',
    maxWidth: '800px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
  };

  const eventTitleStyle = {
    fontSize: '1.8rem',
    color: '#2c3e50',
    marginBottom: '10px',
  };

  const eventMetaStyle = {
    color: '#555',
    marginBottom: '10px',
    fontSize: '0.95rem',
  };

  const eventDescriptionStyle = {
    fontSize: '1rem',
    color: '#444',
    marginBottom: '15px',
  };

  const buttonStyle = {
    background: '#2ecc71',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Upcoming College Events</h2>
      {events.map(event => (
        <div key={event.id} style={eventCardStyle}>
          <h3 style={eventTitleStyle}>{event.title}</h3>
          <div style={eventMetaStyle}>
            📅 {event.date} &nbsp; ⏰ {event.time} &nbsp; 📍 {event.location} &nbsp; 🎯 {event.category}
          </div>
          <p style={eventDescriptionStyle}>{event.description}</p>
          <button style={buttonStyle}>I'm Interested</button>
        </div>
      ))}
    </div>
  );
};

export default EventsPage;
