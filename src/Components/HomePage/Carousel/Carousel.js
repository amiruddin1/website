import React, { useState } from 'react';
import { Carousel } from 'antd';
import { useTranslation } from "react-i18next";
import './Carousel.css';

export default function Slider() {
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { id: 1, file: '/Media/Slider1.mp4', caption: t("HomePage.Carousel.1") },
    { id: 2, file: '/Media/slider2.mp4', caption: t("HomePage.Carousel.2") },
    { id: 3, file: '/Media/slider3.mp4', caption: t("HomePage.Carousel.3") },
    { id: 4, file: '/Media/slider4.jpg', caption: t("HomePage.Carousel.4") },
  ];

  const handleBeforeChange = (_, next) => {
    setActiveSlide(next);
  };

  return (
    <div className="carousel-container-home">
      <Carousel
        arrows
        infinite
        autoplay
        dotPosition="bottom"
        beforeChange={handleBeforeChange}
        className="carousel-home"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide-home ${activeSlide === index ? 'active' : ''}`}
          >
            {slide.file.endsWith('.mp4') ? (
              <video
                className="carousel-media-home"
                src={slide.file}
                autoPlay
                loop
                muted
                playsInline
              ></video>
            ) : (
              <img
                className="carousel-media-home"
                src={slide.file}
                alt={slide.caption}
              />
            )}
            <div
              className={`carousel-caption-home ${
                activeSlide === index ? 'fade-in' : 'fade-out'
              }`}
            >
              {slide.caption}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
