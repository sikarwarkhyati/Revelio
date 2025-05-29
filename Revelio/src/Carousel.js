import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/Images/Poster1.jpg",
  "/Images/Poster2.jpg",
  "/Images/Poster3.jpg",
  "/Images/Poster4.jpg"
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Auto move every 1 second
    arrows: false // Hide arrows for a cleaner look
  };

  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "20px" }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Poster ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
