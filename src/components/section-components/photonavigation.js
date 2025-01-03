import React, { useState } from 'react';

const PhotoNavigation = () => {
  const publicUrl = process.env.PUBLIC_URL + '/';
  const images = [
    "assets/img/about/1.jpg",
    "assets/img/about/2.jpg",
    "assets/img/about/3.jpg",
    "assets/img/about/4.jpg",
    "assets/img/about/5.jpg",
    "assets/img/about/6.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const visibleImages = [
    ...images.slice(currentIndex, currentIndex + imagesPerSlide),
    ...images.slice(0, Math.max(0, currentIndex + imagesPerSlide - images.length))
  ];

  return (
    <div className="photo-navigation">
      <h2>Vidéos - Images</h2>
      <div className="carousel-container">
        <button className="arrow left" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="carousel1">
          {visibleImages.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={publicUrl + image} alt={`Slide ${currentIndex + index + 1}`} />
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={handleNext}>
          &#8250;
        </button>
      </div>
      <div className="carousel-navigation">
        {images.map((_, index) => (
          <button
            key={index}
            className={`nav-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PhotoNavigation;
