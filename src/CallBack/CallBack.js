import "./CallBack.css";

const CallBack = () => {
  return (
    <div className="call-back">
      <h1>Мы Вам перезвоним</h1>
      <p>
        Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы
        Вам перезвоним
      </p>
      <div className="call-back-btn">
        <input type="text" placeholder="Ваше имя" />
        <input type="text" placeholder="Ваш Email" />
        <button type="button">Отправить</button>
      </div>
    </div>
  );
};

export default CallBack;
