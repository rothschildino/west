import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Catolog from './pages/Catolog'
import ShoppingCard from './pages/ShoppingCard'


function App() {


  return <Routes>
    <Route path='/west/' element={ <Home /> } />
    <Route path='/west/catolog/' element={<Catolog />} />
    <Route path='/west/shoppingCard/' element={<ShoppingCard />}/>
  </Routes>
}

export default App
