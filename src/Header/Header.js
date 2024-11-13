import ProductsBD from "../Products/ProductsBD";
import "./Header.css";
import logo from "./img/logo.svg";
import phone from "./img/phone.svg";
import heart from "./img/heart.svg";
import cart from "./img/cart.svg";
import BurgerMenu from "./BugrerMenu";
import React, { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const Header = () => {
  if (useWindowSize() > 900) {
    return (
      <header className="header">
        <div className="header-top">
          <input
            className="header-top-content"
            type="file"
            id="files"
            accept="text/*"
            onChange={ProductsBD}
          />
          <p className="header-top-content">
            Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09
          </p>
          <a className="header-top-content" href="index.html">
            Обратный звонок
          </a>
        </div>
        {/* ================================= */}
        <div className="header-main">
          <nav className="header-main-nav">
            <a className="header-main-link" href="index.html">
              <img src={logo} alt="logo"></img>
            </a>
            <a className="header-main-link" href="index.html">
              Главная
            </a>
            <a className="header-main-link" href="index.html">
              Каталог
            </a>
            <a className="header-main-link" href="index.html">
              Оптовая продажа
            </a>
            <a className="header-main-link" href="index.html">
              О нас
            </a>
          </nav>
          <div className="header-main-btn">
            <a className="header-main-link" href="tel:+79097730028">
              <img src={phone} alt="phone"></img>
            </a>
            <a className="header-main-link" href="tel:+79097730028">
              +7 (909) 773 00 28
            </a>
            <a className="header-main-link" href="index">
              <img src={heart} alt="heart"></img>
            </a>
            <a className="header-main-link" href="index">
              <img src={cart} alt="cart"></img>
            </a>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <div className="header-top">
          <input
            className="header-top-content"
            type="file"
            id="files"
            accept="text/*"
            onChange={ProductsBD}
          />
          <p className="header-top-content">
            Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09
          </p>
          <a className="header-top-content" href="index.html">
            Обратный звонок
          </a>
        </div>
        {/* ================================= */}
        <div className="header-main">
          <BurgerMenu />
        </div>
      </header>
    );
  }
};

export default Header;
