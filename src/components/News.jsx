import React, { useState, useEffect } from "react";

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://679c47c233d3168463264b38.mockapi.io/news")
      .then((res) => res.json())
      .then((arr) => {
        setNews(arr);
      });
  }, []);

  return (
    <div className="news">
      <div className="news-head head-title">Новости</div>
      <div className="news-container">
        {news.map((news, index) => (
          <div
            key={index}
            className="news-card"
            onClick={() => setSelectedNews(news)}
          >
            <img
              width="300px"
              height="200px"
              src={news.image}
              alt={news.title}
              className="news-image"
            />
            <div className="news-content">
              <div className="news-title">{news.title}</div>

              <div className="news-text">{news.shortContent}</div>
              <div className="news-date">{news.date}</div>
              <div className="news-button">Читать далее</div>
            </div>
          </div>
        ))}
      </div>
      {selectedNews && (
        <div className="news-modal-overlay">
          <div className="news-modal">
            <button className="close-btn" onClick={() => setSelectedNews(null)}>
              ✖
            </button>
            <h2 className="news-modal-title">{selectedNews.title}</h2>
            <p className="news-modal-date">{selectedNews.date}</p>
            <p className="news-modal-content">{selectedNews.fullContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default News;
