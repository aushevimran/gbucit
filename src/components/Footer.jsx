import React from "react";
import Logo from "../assets/img/logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-block footer-info">
          <a
            href="/"
            aria-current="page"
            className="footer__logo router-link-exact-active router-link-active"
          >
            <img src={Logo} alt="logo" />
          </a>
          <p>ЦЕНТР ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ</p>
          <br />
          <p>Государственное бюджетное учреждение Республики Ингушетия</p>
        </div>
        <div className="footer-block footer-links">
          <h3>Об учреждении</h3>
          <ul>
            <li>
              <a href="/#">Учреждение</a>
            </li>
            <li>
              <a href="/#">Деятельность</a>
            </li>
            <li>
              <a href="/documents">Документы</a>
            </li>
            <li>
              <a href="/#">Пресс-центр</a>
            </li>
          </ul>
        </div>
        <div className="footer-block footer-links">
          <h3>Контакты</h3>
          <ul>
            <li>Телефон: +7(8732) 22-48-59</li>
            <li>Email: support@ingushetia.ru</li>
            <li>
              Ежедневно с 9:00 до 18:00
              <br />
              Обеденный перерыв: с 13:00 до 14:00
            </li>
            <li>Выходные дни: суббота и воскресенье</li>
            <li>РИ, г.Назрань, ул. Бакинская, 89</li>
          </ul>
        </div>
        <div className="footer-block footer-links">
          <h3>Обратная связь</h3>
          <ul>
            <li>
              <a href="/#">Обращения граждан</a>
            </li>
            <li>
              <a href="/#">Контакты</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2025. Центр Информационных Технологий Государственное бюджетное
          учреждение Республики Ингушетия
        </p>
        <p className="footer__dev_autor">
          Разработано <a href="https://gbucit.ru/">ГБУ ЦИТ</a>
        </p>
      </div>
    </div>
  );
};
export default Footer;
