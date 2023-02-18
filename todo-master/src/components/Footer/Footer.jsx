import React from 'react'

import images from '../../image'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer__container">
        <div className="footer__container-top">
            <img src={images.logo} alt="logo" />
            <h3>Designed, Developed, and Deployed By - Team_Name</h3>
        </div>
        <div className="footer__container-bot">
            <img src={images.git} alt="git" /> <span><a href="https://github.com/chibihime/IH_Project_Jan23-" target="_blank" rel="noopener noreferrer">Github_link</a></span>
            <p>Do-It : The To-Do-List Student Project</p>
        </div>
    </div>
  )
}

export default Footer