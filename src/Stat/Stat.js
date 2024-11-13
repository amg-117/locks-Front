import "./Stat.css";
import productReturn from "./img/product-return.svg";
import like from "./img/like.svg";
import install from "./img/install.svg";

const Stat = () => {
  return (
    <>
      <div className="stat">
        <div className="stat-title">
          <h3>5,567</h3>
          <p>Счастливых клиентов</p>
        </div>
        <div className="stat-title">
          <h3>1245</h3>
          <p>Продуктов на выбор</p>
        </div>
        <div className="stat-title">
          <h3>372</h3>
          <p>Продаж в день</p>
        </div>
        <div className="stat-title">
          <h3>20</h3>
          <p>Лет на рынке</p>
        </div>
      </div>

      {/* Почему GoldenService */}
      <div className="why">
        <h1>Почему GoldenService?</h1>
        <div className="why-container">
          <div className="why-article">
            <img src={install} alt="install" />
            <p>Простота установки и настройки любого нашего продукта</p>
          </div>
          <div className="why-article">
            <img src={like} alt="like" />
            <p>Наносим ваш логотип компании на наш продукт</p>
          </div>
          <div className="why-article">
            <img src={productReturn} alt="productReturn" />
            <p>Возврат удвоенной стоимости каждого замка в случае брака</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stat;
