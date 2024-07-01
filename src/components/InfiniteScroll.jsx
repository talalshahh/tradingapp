import React from "react";
import "../css/carusel.css";

const InfiniteScroll = ({ images }) => {
  return (
    <div className="container">
      <div className="header">
        <h2>Infinite Horizontal Scroll and Hover Pause with Pure CSS</h2>
      </div>
      <div className="scroll-container">
        <div className="carousel-primary">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`cat${index + 1}`} />
          ))}
        </div>
        <div className="carousel-primary carousel-secondary">
          {images.map((image, index) => (
            <img
              key={index + images.length}
              src={image}
              alt={`cat${index + 1 + images.length}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
