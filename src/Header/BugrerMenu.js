import "./BugrerMenu.css";
import logo from "./img/logo.svg";
import phone from "./img/phone.svg";
import heart from "./img/heart.svg";
import cart from "./img/cart.svg";

const BurgerMenu = () => {
  return (
    <div className="menu">
      <input className="burger-checkbox" type="checkbox" id="burger-checkbox" />
      <label className="burger" htmlFor="burger-checkbox"></label>
      <a href="index.html" className="burger-title">
        <img src={logo} alt="logo"></img>
      </a>
      <a href="index.html" className="burger-title">
        Global Soft
      </a>
      <div className="menu-btn">
        <a href="tel:+79097730028">
          <img src={phone} alt="phone"></img>
        </a>
        <a href="index">
          <img src={heart} alt="heart"></img>
        </a>
        <a href="index">
          <img src={cart} alt="cart"></img>
        </a>
      </div>
      <ul className="menu-list">
        <li>
          <a href="index.html" className="menu-item">
            Главная
          </a>
        </li>
        <li>
          <a href="index.html" className="menu-item">
            Каталог
          </a>
        </li>
        <li>
          <a href="index.html" className="menu-item">
            Оптовая продажа
          </a>
        </li>
        <li>
          <a href="index.html" className="menu-item">
            О нас
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
