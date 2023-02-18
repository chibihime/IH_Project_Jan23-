import React from "react";
import AboutCard from "../AboutCard/AboutCard";

import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div id = "about" className="about__container">
      <div className="about__container__content">
        <div>
          <h2>About Us</h2>
          <p>
            We are a team of 4 members - each specialized in their own domain.
          </p>

          <p>
            Everyone’s collaborative work has led to the creation of this
            product.
          </p>
        </div>

        <div className="about__container__content-link">
          Here’s the github link for this project - <a href="https://github.com/chibihime/IH_Project_Jan23-"><u>https://github.com/chibihime/IH_Project_Jan23-</u></a>  
        </div>
      </div>
      <div className="about__container__cards">
        <AboutCard />
      </div>
    </div>
  );
};

export default AboutUs;
