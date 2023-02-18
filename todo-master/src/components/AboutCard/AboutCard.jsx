import React from "react";
import images from "../../image";

import "./aboutCard.css";
const AboutCard = () => {
  return (
    <div className="person__container">
      <div class="person_box">
        <h2>
          Design + <br /> Frontend
        </h2>
        <div className="person_box-image"></div>
        <p className="person_box-name">
          Chinmay Mhatre <br /> B.Tech CSE <br /><a href="https://github.com/chinmay-1302" target="_blank" rel="noopener noreferrer"><u>@chinmay-1302</u></a>
        </p>
      </div>
      <div class="person_box bot">
        <h2>
          Frontend
        </h2>
        <div className="person_box-image"></div>
        <p className="person_box-name">
        Prutha Annadate <br /> SY B.Tech - CSE (AI&DS) <br /><a href="https://github.com/chibihime" target="_blank" rel="noopener noreferrer"><u>@chibihime</u></a>
        </p>
      </div>
      <div class="person_box">
        <h2>
          Backend
        </h2>
        <div className="person_box-image"></div>
        <p className="person_box-name">
          Kushal Shah <br /> SY B.Tech - CSE (AI&DS) <br /> <a href="https://github.com/Kushal0409" target="_blank" rel="noopener noreferrer"><u>@Kushal0409</u></a>
        </p>
      </div>
      <div class="person_box bot">
        <h2>
          Backend
        </h2>
        <div className="person_box-image"></div>
        <p className="person_box-name">
          Vedang <br />  B.Tech - CSE (CSF) <br /> @github_id
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
