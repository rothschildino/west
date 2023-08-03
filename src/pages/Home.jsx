import React from 'react'

import '../App.css'
import './Home.css'

import Header from '../components/Header'
import Banners from '../components/UI/Banners/Banners'
import Services from '../components/UI/Services/Services'
import Footer from '../components/Footer'
import Menu from '../components/UI/menu/Menu'
import PopularItems from '../components/UI/Items/popularItems/PopularItems'

const Home = ({product}) => {
  return (
   <div className='home'>
   
    <Header /> 
    <Banners />
    <Services textMain={'Наші послуги'}/>
    <PopularItems product={product}/> 
    <Footer />
    <Menu name={["Головна", "Каталог", "Придумаю"]}/> 
   </div>
  )
}

export default Home