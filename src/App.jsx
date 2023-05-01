import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Catolog from './pages/Catolog'
import ShoppingCard from './pages/ShoppingCard'
import ProductCategory from './pages/ProductCategory'
import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import data from "./data/Data.js"

function App() {


  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  console.log(cash)

  const { product, categories } = data;

  const [card, setCard] = useState([]);

  const handleAddProduct = (item) => {
    setCard([...card, item]);
    console.log(card)
  }

  
  const [category, setCategory] = useState([])

 
  
 
    let categoryItems = (productCategory) => product.filter( (el) => el.category === productCategory)

    

    


  return <Routes>
    <Route path='/west/' element={ <Home product={product}/> } />
    <Route path='/west/catolog/'  element={<Catolog onFilter={categoryItems} setCategory={setCategory} category={category} categories={categories} product={product} onAdd={handleAddProduct}/>} />
    <Route path='/west/shoppingCard/' element={<ShoppingCard card={card}/>}/>
    <Route path='/west/product-category/' element={< ProductCategory itemsCategory={category} />}/>
  </Routes>
}

export default App
