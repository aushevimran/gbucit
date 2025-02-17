import React from "react";
import LOGO from "../assets/img/unnamed.jpg";

const RotatingTextAroundImage = () => {
  return (
    <div className="circle">
      <div className="rotating-text">
        <svg className="svglogotext" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="100" fill="none" stroke="lightgray" />
          <image
            href={LOGO}
            x="125"
            y="125"
            width="150"
            height="150"
            clipPath="circle(75px at 75px 75px)"
          />
          <text>
            <textPath href="#circlePath" startOffset="45%" textAnchor="middle">
              центр информационных технологий
            </textPath>
          </text>

          <path
            id="circlePath"
            d="M 200 100 A 100 100 0 1 1 199.9 100 Z"
            fill="transparent"
          />
        </svg>
      </div>
    </div>
  );
};

export default RotatingTextAroundImage;
