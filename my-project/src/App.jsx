import './index.css'
//
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom"
/*import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Cart from './pages/Cart'
*/
import Home from './pages/Home'
import Rigister from './pages/Rigister'
import Login from './pages/Login'
import NavBar from './component/NavBar'
import Cart from './AddtoCart/Cart'
import Product from './AddtoCart/product'
import { useState } from 'react'

function App() {
  const [carts,setCarts]=useState([]);
  const [show,setShow]=useState(true);
  const [warining,setWarning]=useState(false);
 
  const handleClick =(iteam)=>{
  let isPresen=false;
  carts.forEach((product)=>{
    if(iteam.id===product.id)
      isPresen=true;
  })
   if(isPresen){
    setWarning(true);
    alert("PRODUCT ALREADY EXISTS")
    setTimeout(()=>{
     setWarning(false)
    },2000);
    return;
   }
   if(isPresen===false){
    setCarts([...carts,iteam]);
    console.log(carts)
   }
} 

const handleChange= (pro,d)=>{
  let ind=-1;
  carts.forEach((data,index)=>{
   if(data.id === pro.id)
       ind = index;
  });
  const tempArr =carts;
   tempArr[ind].amount += d;
  if(tempArr[ind].amount === 0)
    tempArr[ind].amount = 1;
  setCarts([...tempArr])
 }
  return (
   <Router>
      <NavBar size={carts.length} />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route index path='/p' element={ <Product  click={handleClick}  />} />
       <Route path='/c'element={<Cart Cart={carts} handleChange={handleChange}  setCart={setCarts} key={Math.random(1)}/>  }  />
          <Route path='/r' element={<Rigister />} />
        <Route path='/lo' element={<Login />} />
     </Routes> 
    </Router>
  
  )
}

export default App
