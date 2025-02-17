import React, { useState, useEffect } from "react";
import axios from "axios";

const Docs = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios
      .get("https://67a512a5c0ac39787a1d6c33.mockapi.io/docs")
      .then((res) => setDocuments(res.data))

      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);

  return (
    <div className="wrapper__container">
      <div className="docs">
        <div className="docs__title head-title">Документы</div>
        <div className="docs__total">
          <ul className="docs__list">
            {documents.map((arr, id) => (
              <li key={id} className="docs__list-item">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="10"
                    y="10"
                    width="60"
                    height="60"
                    rx="10"
                    ry="10"
                    fill="#1b1d27"
                  />
                  <text
                    x="15"
                    y="40"
                    font-family="Arial"
                    font-size="18"
                    fill="#1b1d27"
                    font-weight="bold"
                  >
                    pdf
                  </text>
                </svg>
                <a
                  href={arr.url}
                  className="docs__document"
                  target="_blank"
                  rel="noreferrer"
                >
                  {arr.title}
                </a>
                <span className="docs__date">{arr.date}</span>
                <a
                  href={arr.url}
                  className="docs__button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Открыть
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Docs;
