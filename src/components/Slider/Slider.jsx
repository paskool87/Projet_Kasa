import { useState, useRef, useEffect } from "react";
import arrowL from "../../assets/icones/arrowL.svg";
import arrowR from "../../assets/icones/arrowR.svg";
import "./Slider.scss";

function Slider({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const sliderRef = useRef();
  const slides = [...pictures];
  const totalSlides = slides.length;
  const LastImg = slides[totalSlides - 1];
  const slidesWithClones = [LastImg, ...slides, slides[0]];
  const [isAnimating, setIsAnimating] = useState(false);


  const nextSlide = () => {
    if (isAnimating) return;
    setCurrentIndex((prev) => prev + 1);
    setIsAnimating(true);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setCurrentIndex((prev) => prev - 1);
    setIsAnimating(true);
  };

  useEffect(() => {
    if (!sliderRef.current) return;

    if (isAnimating) {
      sliderRef.current.style.transition = "transform 0.5s ease";
    }
    else {
      sliderRef.current.style.transition = "none";
    }

    sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex, isAnimating]);

  const handleTransitionEnd = () => {
    setIsAnimating(false);

    if (currentIndex === slidesWithClones.length - 1) {
      setIsAnimating(false);
      setCurrentIndex(1);
      return;
    }

    if (currentIndex === 0) {
      setIsAnimating(false);
      setCurrentIndex(slides.length);
      return;
    }
  };
  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        ref={sliderRef}
        onTransitionEnd={handleTransitionEnd}
      >
        {slidesWithClones.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${title} - Slide ${idx}`}
            className="slider-image"
          />
        ))}
      </div>

      <img src={arrowL} className="slider-arrow left" onClick={prevSlide} />

      <img src={arrowR} className="slider-arrow right" onClick={nextSlide} />
    </div>
  );
}

export default Slider;
