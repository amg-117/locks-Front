import React, { useState, useEffect } from "react";
import "./Slider.css"; // Подключим стили
import slide1 from "./img/product1.png";
import slide2 from "./img/product2.png";
import slide3 from "./img/product3.png";
import slide4 from "./img/product4.png";

const Slider = () => {
  const slides = [
    {
      id: 1,
      url: slide1,
      name: "Golden Soft GS-200Z-5 для офиса",
      caption:
        "Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.",
      caption2: "Подходит для установки на деревянную/межкомнатную дверь.",
      prise: "33 000 р.",
      oldPrise: "37 000 р.",
    },
    {
      id: 2,
      url: slide2,
      name: "Golden Soft GS-200Z-5 для дома",
      caption:
        "Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.",
      caption2: "Подходит для установки на деревянную/межкомнатную дверь.",
      prise: "14 990 р.",
      oldPrise: "18 990 р.",
    },
    {
      id: 3,
      url: slide3,
      name: "Golden Soft GS-200Z-5 для гаража",
      caption:
        "Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.",
      caption2: "Подходит для установки на деревянную/межкомнатную дверь.",
      prise: "5 500 р.",
      oldPrise: "11 700 р.",
    },
    {
      id: 4,
      url: slide4,
      name: "Golden Soft GS-200Z-5 для сейфа",
      caption:
        "Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.",
      caption2: "Подходит для установки на деревянную/межкомнатную дверь.",
      prise: "24 990 р.",
      oldPrise: "29 990 р.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  // Функция для смены слайда
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  // Используем useEffect для автоматической смены слайдов
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // меняем слайд каждые 2 секунды
    return () => clearInterval(interval); // очищаем интервал при размонтировании
  }, []);

  return (
    <div className="slider-container">
      <div className="slider">
        <img
          className="slider-img"
          src={slides[currentIndex].url}
          alt={`Slide ${currentIndex + 1}`}
        />
        <div className="slider-content">
          <h1>{slides[currentIndex].name}</h1>
          <p>{slides[currentIndex].caption}</p>
          <p>{slides[currentIndex].caption2}</p>
          <h3>{slides[currentIndex].prise}</h3>
          <h3 style={{ textDecoration: "line-through", fontWeight: 100 }}>
            {slides[currentIndex].oldPrise}
          </h3>
        </div>
      </div>

      {/* Кнопки */}
      <div className="slider-btn">
        <button className="prev slider-button" onClick={prevSlide}>
          ◀
        </button>
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
        <button className="next slider-button" onClick={nextSlide}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default Slider;
