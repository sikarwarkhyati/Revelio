// MainLayout.js
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import UpcomingEvents from "./UpcomingEvents";
import Footer from "./Footer";

const MainLayout = () => {
  const location = useLocation();

  // If you're on "/account", hide the carousel & upcoming events
  const hideFeatures = ["/account"];
  const showCarousel = !hideFeatures.includes(location.pathname);

  return (
    <div>
      <Navbar />
      <Outlet />
      {/* Conditionally render Carousel & UpcomingEvents */}
      {showCarousel && <Carousel />}
      {showCarousel && <UpcomingEvents />}
      <Footer />
    </div>
  );
};

export default MainLayout;
