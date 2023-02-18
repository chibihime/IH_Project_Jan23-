import React from 'react'

import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'

import FeatureSet from '../components/FeatureSet/FeatureSet'

import AboutUs from '../components/AboutUs/AboutUs'
import FAQs from '../components/FAQs/FAQs'
import Footer from '../components/Footer/Footer'

const Page = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <FeatureSet/>
        <AboutUs/>
        <FAQs/>
        <Footer/>
    </div>
  )
}

export default Page