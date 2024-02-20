import './index.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom"
import ProductList from './pages/ProductList'
//import Product from './pages/Product'
import Rigister from './pages/Rigister'
import Login from './pages/Login'
import Cart from './pages/Cart'
import NavBar from './component/NavBar'

function App() {
  return (
   <>
   <Router>
      <NavBar />
      <Routes>
       <Route index path='/' element={<Home  /> } />
       
        <Route path='/r' element={<Rigister />} />
        <Route path='/lo' element={<Login />} />
        <Route path='/p' element={<ProductList/>} />
        <Route path='/C' element={<Cart />} />

      </Routes>
    </Router>
   </>
  
  )
}

export default App
