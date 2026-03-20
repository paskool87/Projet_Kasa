import { useState, useRef, useEffect } from "react";
import arrowL from "../../assets/icones/arrowL.svg";
import arrowR from "../../assets/icones/arrowR.svg";
import "./Slider.scss";

function Slider({ cover, pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const sliderRef = useRef();
  const slides = [cover, ...pictures];
  const slidesWithClones = [slides[slides.length - 1], ...slides, slides[0]];
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

    // Si on est sur le clone de la première (tout à droite)
    if (currentIndex === slidesWithClones.length - 1) {
      sliderRef.current.style.transition = "none";
      setCurrentIndex(1);
      sliderRef.current.style.transform = `translateX(-100%)`;
    }

    // Si on est sur le clone de la dernière (tout à gauche)
    if (currentIndex === 0) {
      sliderRef.current.style.transition = "none";
      setCurrentIndex(slides.length);
      sliderRef.current.style.transform = `translateX(-${
        slides.length * 100
      }%)`;
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
