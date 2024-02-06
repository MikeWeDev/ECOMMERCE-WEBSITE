import './index.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom"
import ProductList from './pages/ProductList'
//import Product from './pages/Product'
import Rigister from './pages/Rigister'
import Login from './pages/Login'
import Cart from './pages/Cart'
function App() {

  return (
   <>
    <Router>
      <Routes>
       <Route index path='/' element={<Home  /> } />
        <Route  path='/c' element={<Cart />} />
        <Route path='/r' element={<Rigister />} />
        <Route path='/lo' element={<Login />} />
        <Route path='/p' element={<ProductList/>} />
      </Routes>
    </Router>
    
  
   </>
  
  )
}

export default App
