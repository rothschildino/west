import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Catolog from './pages/Catolog'
import ShoppingCard from './pages/ShoppingCard'
import { useState } from 'react'

import data from "./data/Data.js"

function App() {

  const { product, categories } = data;

  const [card, setCard] = useState([]);

  const handleAddProduct = (item) => {
    setCard([...card, item]);
    console.log(card)
  }

  


  return <Routes>
    <Route path='/west/' element={ <Home product={product}/> } />
    <Route path='/west/catolog/' element={<Catolog categories={categories} product={product} onAdd={handleAddProduct}/>} />
    <Route path='/west/shoppingCard/' element={<ShoppingCard card={card}/>}/>
  </Routes>
}

export default App
