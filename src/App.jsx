import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Catolog from './pages/Catolog'
import ShoppingCard from './pages/ShoppingCard'
import ProductCategory from './pages/ProductCategory'
import { useEffect, useState } from 'react'

import data from "./data/Data.js"

function App() {

  const { product, categories } = data;

  const [card, setCard] = useState([]);

  const handleAddProduct = (item) => {
    setCard([...card, item]);
    console.log(card)
  }

  
  const [category, setCategory] = useState([])

 
  
 
    let categoryItems = (productCategory) => product.filter( (el) => el.category === productCategory)

    useEffect(() => {
      setCategory(categoryItems())
     
    }, [])

    


  return <Routes>
    <Route path='/west/' element={ <Home product={product}/> } />
    <Route path='/west/catolog/'  element={<Catolog onFilter={categoryItems} category={category} categories={categories} product={product} onAdd={handleAddProduct}/>} />
    <Route path='/west/shoppingCard/' element={<ShoppingCard card={card}/>}/>
    <Route path='/west/product-category/' element={< ProductCategory itemsCategory={category} />}/>
  </Routes>
}

export default App
