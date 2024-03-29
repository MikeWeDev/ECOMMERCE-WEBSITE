import './index.css'
import { HashRouter as Router, Routes ,Route } from "react-router-dom"
import Products from './AddtoCart/productPage'
import Rigister from './pages/Rigister'
import Login from './pages/Login'
import NavBar from './component/NavBar'
import Cart from './AddtoCart/Cart'
import Product from './AddtoCart/product'
import { useState } from 'react'
import Info from './pages/info'
function App() {
  const [carts,setCarts]=useState([]);
  const [info,setInfo]=useState([]);
  const [show,setShow]=useState(true);
  const [warining,setWarning]=useState(false);
 const [search,setSearch]=useState('')

  const handleClick =(iteam)=>{
  let isPresen=false;
  carts.forEach((product)=>{
    if(iteam.id===product.id)
      isPresen=true;
  })
   if(isPresen){
    setWarning(true);
    alert("PRODUCT ALREADY EXISTS")
    return;
   }
   if(isPresen===false){
    setCarts([...carts,iteam]);

   }
} 

const handleInfo =(iteam)=>{
  let isPresen=false;
  info.forEach((product)=>{
    if(iteam.id===product.id)
      isPresen=true;
  })
   if(isPresen){
    setWarning(true);
    alert("PRODUCT ALREADY ADDED TO CART")
    return;
   }
   if(isPresen===false){
    setInfo([...info,iteam]);
   
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
 const handleInfoChange= (pro,d)=>{
  let ind=-1;
  info.forEach((data,index)=>{
   if(data.id === pro.id)
       ind = index;
  });
  const tempArr =info;
   tempArr[ind].amount += d;
  if(tempArr[ind].amount === 0)
    tempArr[ind].amount = 1;
  setInfo([...tempArr])
 }
 const x=carts.length;


  return (
   <Router> 
            <NavBar size={x}  />

     <Routes>
       <Route index path='/' element={ <Product  click={handleClick} handle={handleInfo} key={Math.random(1)}  Cart={x} />} />
        <Route path='/c'element={<Cart Cart={carts} x={x} handleChange={handleChange}  setCart={setCarts} key={Math.random(1)}/>  }  />
          <Route path='/r' element={<Rigister />} />
        <Route path='/lo' element={<Login />} />
        <Route path='/p'   element={<Products  handle={handleInfo} size={x} click={handleClick}  key={Math.random(100)}/>} />
        <Route path='/in'  element={<Info  carts={handleClick} info={info}  handleChange={handleInfoChange} setInfo={setInfo}/>}  />
      
     </Routes> 
    </Router>
  
  )
}

export default App
