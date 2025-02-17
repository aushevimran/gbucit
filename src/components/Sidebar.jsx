import React, { useState } from "react";

import Header from "../components/Header";
import RotatingTextAroundImage from "../components/Around";

const Sidebar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className="sidebar">
        <div className="top">ГБУ ЦИТ - ©2025 </div>
        <div className="middle" onClick={toggleMenu}>
          <div className={`burger ${menuActive ? "active" : ""}`}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="bottom">
          <nav className="social-links">
            <ul>
              <li>
                <a
                  href="https://t.me/gbucit06"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.383 7.575l-1.65 7.807c-.123.533-.436.664-.883.417l-2.451-1.814-1.182 1.141c-.131.132-.242.242-.497.242l.178-2.527 4.607-4.146c.2-.178-.043-.278-.31-.1l-5.7 3.574-2.451-.767c-.533-.166-.543-.533.111-.787l10.243-3.954c.467-.178.872.1.72.766z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://vk.com/?u=2&to=L2didWNpdA--"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="VK"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.79 16.03h-1.202c-.496 0-.56-.388-1.437-1.26-.758-.733-1.076-.826-1.26-.826-.22 0-.276.064-.276.367v.937c0 .266-.08.354-.575.354-1.024 0-2.224-.707-3.052-1.998-1.22-1.845-1.562-3.026-1.562-3.214 0-.132.05-.248.36-.248h1.202c.286 0 .33.098.414.367.457 1.43 1.23 2.689 1.402 2.689.108 0 .152-.056.152-.367v-1.34c-.032-.713-.446-.788-.446-1.036 0-.115.092-.231.31-.231h1.727c.248 0 .286.098.318.231.046.304-.46.423-.46 1.036v1.014c0 .272.044.328.152.328.178 0 .31-.084.62-.397.604-.65 1.052-1.648 1.052-1.648.082-.196.144-.354.42-.354h1.202c.304 0 .376.165.31.41-.133.523-.686 1.342-1.311 2.086-.205.247-.306.374-.042.66.2.216.895.862 1.065 1.268.133.312-.031.475-.32.475z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a2.998 2.998 0 00-2.113-2.113C19.738 3.5 12 3.5 12 3.5s-7.738 0-9.385.573a2.998 2.998 0 00-2.113 2.113C0 7.833 0 12 0 12s0 4.167.502 5.814a2.998 2.998 0 002.113 2.113C4.262 20.5 12 20.5 12 20.5s7.738 0 9.385-.573a2.998 2.998 0 002.113-2.113C24 16.167 24 12 24 12s0-4.167-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={`menu ${menuActive ? "active" : ""}`}>
        <Header />
        <div className="menu-content">
          <nav>
            <ul>
              <li>
                <a href="/">
                  <span>01</span> Главная
                </a>
              </li>
              <li>
                <a href="/services">
                  <span>02</span> Услуги
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>03</span> Контакты
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>04</span> Цели и задачи
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>05</span> Об учреждении
                </a>
              </li>
            </ul>
            <div className="line"></div>
            <ul>
              <li>
                <a href="/#">
                  <span>06</span> Отделы
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>07</span> Проекты
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>08</span> Вакансии
                </a>
              </li>
              <li>
                <a href="/documents">
                  <span>09</span> Документы
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>10</span> Руководство
                </a>
              </li>
            </ul>
          </nav>
          <div className="menu-content--left_block"></div>
        </div>
        <div className="menu__sidebar--bottom">
          <RotatingTextAroundImage />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
