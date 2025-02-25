import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Events from "./Events";
import Community from "./Community";
import Blog from "./Blog";
import Carousel from "./Carousel";
import UpcomingEvents from "./UpcomingEvents";
import Footer from "./Footer";
import "bootstrap-icons/font/bootstrap-icons.css";


const App = () => {
  return (
    <div
      style={{
        background: "linear-gradient(45deg, #2C3E50, #1ABC9C)",
        backgroundSize: "400% 400%",
        animation: "moveBackground 8s infinite linear",
        minHeight: "100vh",
        color: "#F3F1E8",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/community" element={<Community />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      
      <Carousel />
      <UpcomingEvents />
      <Footer />
    </div>
  );
};

export default App;
