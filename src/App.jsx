import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Catolog from './pages/Catolog'


function App() {


  return <Routes>
    <Route path='/west/' element={ <Home /> } />
    < Route path='/west/catolog/' element={<Catolog />} />
  </Routes>
}

export default App
