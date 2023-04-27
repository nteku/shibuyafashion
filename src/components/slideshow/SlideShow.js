import React, { useState, useEffect, useRef } from 'react';
import './Slideshow.css';

const Slideshow = ({ imageList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const numImages = imageList.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevState) =>
        prevState === numImages - 1 ? 0 : prevState + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [numImages]);

  useEffect(() => {
    const container = containerRef.current;
    const width = container.clientWidth;
    container.style.transform = `translateX(-${currentIndex * width}px)`;
    if (currentIndex === numImages - 1) {
      setTimeout(() => {
        setCurrentIndex(0);
        container.style.transition = 'none';
        container.style.transform = `translateX(0px)`;
        setTimeout(() => {
          container.style.transition = 'transform 0.5s ease-in-out';
        });
      }, 5000);
    }
  }, [currentIndex, numImages]);

  return (
    <div className="slideshow-container">
      <div className="slideshow-inner" ref={containerRef}>
        {imageList.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slideshow Image ${index}`}
            className="slideshow-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;

