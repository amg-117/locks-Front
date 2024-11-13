import "./Footer.css";
import logo from "./img/Logo.svg";
import vk from "./img/vk.svg";
import twitter from "./img/twitter.svg";
import fb from "./img/fb.svg";

const Footer = () => {
  return (
    <footer className="footer">
      {/* ------------------------- */}
      <div className="footer-main">
        {/* ------------------------- */}
        <div className="footer-info-img">
          <img src={logo} alt="logo" />
          <div className="footer-main-social">
            <img src={vk} alt="vk" />
            <img src={twitter} alt="twitter" />
            <img src={fb} alt="fb" />
          </div>
        </div>
        <div className="footer-info">
          <div className="footer-info-item">
            <h5>Навигация</h5>
            <a href="index.html">Главная</a>
            <a href="index.html">Католог</a>
            <a href="index.html">Оптовая продажа</a>
            <a href="index.html">О нас</a>
          </div>
          <div className="footer-info-item">
            <h5>Наши контакты</h5>
            <p>Телефоны</p>
            <a href="tel:+79885650038">+7 (988) 565 00 38</a>
            <a href="tel:+375336628256">+375 33 662 82 56</a>
            <p>Email</p>
            <a href="mailto:vladpertcev@mail.ru">vladpertcev@mail.ru</a>
            <a href="mailto:korobko416@gmail.com">korobko416@gmail.com</a>
          </div>
          <div className="footer-info-item">
            <h5>Наш Адрес</h5>
            <a
              href="https://yandex.ru/maps/39/rostov-na-donu/house/pereulok_bogacheva_16/Z0AYcANgS00FQFptfX15dnRlbQ==/?ll=39.640282%2C47.187869&z=17"
              target="blank"
            >
              Россия, Ростов-на-Дону ул. Богачева, 16
            </a>
          </div>
          <div className="footer-info-item">
            <h5>Информация</h5>
            <a href="index.html">Доставка и оплата</a>
            <a href="index.html">Гарантии</a>
            <a href="index.html">Возврат товара</a>
          </div>
        </div>
      </div>
      {/* ------------------------- */}
      <div className="footer-bot">© 2021 Golden Soft All rights reserved.</div>
      {/* ------------------------- */}
    </footer>
  );
};

export default Footer;
