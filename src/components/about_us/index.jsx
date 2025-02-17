import React from "react";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="text-center head-title">Об учреждении</div>
      <div className="about__row">
        <div className="about-top">
          <div className="about-top__blocks">
            <p className="about-top__text_description">
              Государcтвенное бюджетное учреждение "Центр информационных
              технологий" является подведомственным учреждением&ensp;
              <a
                className="about-top__text_description--link"
                href="https://mtseing.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Министерства промышленности и цифрового развития Республики
                Ингушетия
              </a>
            </p>
            <p className="about-top__text_description">
              ГБУ "ЦИТ" создано для выполнения работ, оказания услуг в целях
              обеспечения реализации предусмотренных федеральными законами,
              иными нормативными правовыми актами Российской Федерации, законами
              и иными нормативными правовыми актами РИ в сфере информационных и
              коммуникационных технологий.
            </p>
          </div>
        </div>
        <div className="about--arrow">
          <svg
            className="about--arrow-svg"
            width="80"
            height="40"
            viewBox="0 0 80 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0"
              y1="20"
              x2="60"
              y2="20"
              stroke="#f2f2f2"
              stroke-width="2"
            />
            <polygon points="60,10 80,20 60,30" fill="#f2f2f2" />
          </svg>
        </div>
        <div className="about__text_bottom">
          Центр информационных технологий оказывает широкий спектр услуг - как
          техническое сопровождение и анализа безопасности IT инфраструктуры,
          так и разработку и сопровождение сайтов для предприятий и организаций.
          Наши специалисты по безопасности выезжают на рабочие места заказчиков,
          проводят анализ IT инфраструктуры, дают рекомендации и оказывают
          содействие в устранении имеющихся уязвимостей.
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
