import React from "react";
import ReactPlayer from "react-player";

const Bts = () => {
  const containerStyle = {
    padding: "2rem",
    background: "inherit",
    fontFamily: "sans-serif",
    minHeight: "100vh",
    marginTop: "4.5rem", // Push below navbar
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "2.8rem",
    marginBottom: "2rem",
    color: "#222",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.8rem",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    overflow: "hidden",
    padding: "1rem",
    transition: "transform 0.3s",
  };

  const videoWrapperStyle = {
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "1rem",
  };

  const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "1rem",
  };

  const audioStyle = {
    width: "100%",
    marginTop: "0.5rem",
    borderRadius: "8px",
  };

  const descStyle = {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.5",
  };

  const buttonStyle = {
    marginTop: "1rem",
    padding: "0.7rem 1.2rem",
    backgroundColor: "#ff4b2b",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const btsContent = [
    {
      id: 1,
      type: "video",
      videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
      description: "Watch the electrifying setup of TechnoVerse 2024!",
    },
    {
      id: 2,
      type: "image",
      imageUrl: "https://source.unsplash.com/featured/?college,event",
      description: "Stage prep at 2AM — passion, coffee, and teamwork!",
    },
    {
      id: 3,
      type: "text",
      description:
        "The cultural committee faced a last-minute speaker failure — but a borrowed mic from the photography club saved the day. True community spirit in action!",
    },
    {
      id: 4,
      type: "audio",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      description: "A sneak peek of the tech talk intro jingle!",
    },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>🎬 Behind the Scenes</h2>
      <div style={gridStyle}>
        {btsContent.map((bts) => (
          <div key={bts.id} style={cardStyle}>
            {bts.type === "video" && (
              <div style={videoWrapperStyle}>
                <ReactPlayer url={bts.videoUrl} width="100%" height="200px" controls />
              </div>
            )}
            {bts.type === "image" && (
              <img src={bts.imageUrl} alt="BTS" style={imgStyle} />
            )}
            {bts.type === "audio" && (
              <>
                <p style={descStyle}>{bts.description}</p>
                <audio controls style={audioStyle}>
                  <source src={bts.audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </>
            )}
            {bts.type === "text" && (
              <p style={descStyle}>{bts.description}</p>
            )}
            {bts.type !== "audio" && (
              <p style={descStyle}>{bts.description}</p>
            )}
            <button style={buttonStyle}>Register Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bts;
