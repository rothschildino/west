import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Catolog from './pages/Catolog'
import ShoppingCard from './pages/ShoppingCard'
import { useState } from 'react'

import data from "./data/Data.js"

function App() {

  const [card, setCard] = useState([]);

  const { product } = data;


  return <Routes>
    <Route path='/west/' element={ <Home product={product}/> } />
    <Route path='/west/catolog/' element={<Catolog product={product}/>} />
    <Route path='/west/shoppingCard/' element={<ShoppingCard card={card}/>}/>
  </Routes>
}

export default App
