import React from 'react'

import images from '../../image.js'

import './navbar.css'


const navbar = () => {
  return (
    <nav className='navbar__container'>
        <div className='navbar__container-links'>
            <div className='logo'>
                <img src={images.logo} alt = "logo"/>
            </div>
            <div className='navbar__container-links-link'>
                <ul>
                    <li><a href= "#features">Features</a></li>
                    <li><a href ="#about">About us</a></li>
                    <li><a href = "#faq">FAQs</a></li>
                </ul>
            </div>
        </div>
        <div className='navbar__container-signUp'>
            <ul>
                <li><a href="#">Sign in</a></li>
                <li><button className='btn'>Sign Up</button></li>
            </ul>
        </div>
    </nav>
  )
}

export default navbar