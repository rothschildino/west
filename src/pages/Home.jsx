import React from 'react'

import '../App.css'
import './Home.css'

import Header from '../components/Header'
import Banners from '../components/UI/Banners/Banners'
import Services from '../components/UI/Services/Services'
import Footer from '../components/Footer'

const Home = () => {
  return (
   <div className='home'>
    <Header /> 
    <Banners />
    <Services textMain={'Наші послуги'}/>
    <Footer /> 
    <div>1233</div>
   </div>
  )
}

export default Home