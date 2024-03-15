import {Link} from "react-router-dom"
import { useState } from "react"
function NavBar({size,product,setProduct}) {

  return (
   <div className=" absolute top-[7px]">
 <div className="h-[60px]  bg-white-500   rounded-lg flex fixed
    justify-between text-center  bg-teal-800 text-white  z-50   w-[97vw] ml-2 border-[2px] border-white ">
      <div className="p-4  text-left w-[33.3%]  justify-around hidden md:flex  ">
       <span className="cursor-pointer text-7 ">
        ENG
       </span>
       <Link to="/P">
      
      <form action="">
       
      <input
        type="text" 
       value={product}
       onChange={(e)=>setProduct(e.target.value)}
        className="w-15 text-black border "/>  
      
      </form>
      </Link>
     
      
  
        </div>
        <div className ="text-start  w-[33.3%] underline text-[20px] p-4  flex-1 font-bold md:text-center">
        <Link to="/">MIKE</Link>
         
        </div>
        <div className="">
        <div className =" text-[33.3%]  p-4  flex 
        justify-flex-end gap-2 ">
          <span className="mr-2 text-[15px] font-light">
           <Link to="/r">RIGISTER</Link> 
          </span>
          <span  className="mr-2 text-[15px] font-light">
          <Link to="/lo"> SIGN-IN</Link> 
          </span>
        <Link to="/c">
        <div className="relative flex">
          <div className="">
          <svg className="my-1  cursor-pointer " width="25px" height="20px"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
        <span className="text-2xl  absolute top-[-20px] right-[-5px] text-red-500 shadow-2xl">
          {size}
        </span>
          </div>
        
        </div>
        
         </Link>
          </div>
        </div>
       
    </div>

   </div>
  
  
   
  )
}

export default NavBar