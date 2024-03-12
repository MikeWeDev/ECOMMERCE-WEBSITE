import {Link} from "react-router-dom"
import NewsLetter from "../component/NewsLetter";
import Fotter from "../component/Fotter";
import { useState } from "react";
import newDatas from "../ProductPage";
function Products(props) {
  const [product,setProduct]=useState("")
  const [color,setColor]=useState('')
  const [type,setType]=useState('')
  const [time,setTime]=useState('')


    const {click,size,handle} = props;
   
     return (
     
      <>
       <div className=" absolute top-[7px]">
 <div className="h-[60px]  bg-white-500   rounded-lg flex fixed
    justify-between text-center  bg-teal-800 text-white  z-50   w-[97vw] ml-2 border-[2px] border-white ">
      <div className="p-4  text-left w-[33.3%]  justify-around hidden md:flex  ">
       <span className="cursor-pointer text-7 ">
        ENG
       </span>
  
      
      <form action="">
       
      <input
        type="text" 
       value={product}
       onChange={(e)=>setProduct(e.target.value)}
        className="w-15 text-black border ml-5 "/>  
      </form>
     
      
  
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




   <div className="">
         <div className="fiter-container flex justify-between items-center mt-[100px]">
     
        <div className="filter1 mx-10 font-semibold text-[15px] ">
             <h1 className='block text-5 sm:flex'> Filter product</h1>  
          <select className='mx-2 my-3 p-1 text[20px] border border-black border-3'
           value={color} onChange={(e)=>setColor(e.target.value)} >
           <option value="">Color</option>
            <option  value="white">
             White
            </option>
            <option value="black" >Black</option>
            <option value="red">Red</option>
            <option value="browen">browen</option>
            <option value="yellow">Yellow</option>
            <option value="others">others</option>
          </select>
          <select className='mx-2 p-1 text[15px] border border-black border-3'
          value={type} onChange={(e)=>setType(e.target.value)}>
            <option value="">
             Type
            </option>
            <option value="tshirt">T-shirt</option>
            <option value="hoddies">Hoddi</option>
            <option value="jense">Jense</option>
            <option value="shouse">Shoes</option>
            <option value="others">Others</option>
          </select>
         
      
      <form action=""  className="block md:hidden ">
      <h1 className=' text-5 '>  Search product
</h1>  
      <input
        type="text" 
       value={product}
       placeholder="Search"
       onChange={(e)=>setProduct(e.target.value)}
        className="w-15 text-black  border-[2px] border-black "/>  
      </form>
     
      
  
        
        </div>
        
        <div className="filter2 mx-1  font-semibold text-[14px] hidden md:block">
        <h1 className='block text-5 sm:flex'>  Sort product
</h1>  
         <select className='p-1 text[15px] border  border-black border-3 '
         value={time} onChange={(e)=>setTime(e.target.value)}>
            <option value="">
              Newest
            </option>
            <option value="new">Produced(`Above-2020 G.C`)</option>
            <option value="old">Produced(`Below-2020 G.C`)</option>
          </select>
        
        </div>
       
      </div>
        
  <div className="flex flex-wrap justify-between bg-[rgba(0,0,0,0.1)] align-center mt-[70px]  ">
    {newDatas.filter((iteam)=>{
      return color === "" ? iteam: iteam.color === color
    }).filter((iteam)=>{
      return type === "" ? iteam : iteam.type ===type
    }).filter((iteam)=>{
      return time === "" ? iteam : iteam.time === time
    }).filter((iteam)=>{
  return  product === "" ? iteam : iteam.fName.toLowerCase() === product.toLocaleLowerCase()
    }).map((iteam,index)=>(
            <>
            <div key={index} className="box-container hover:scale-110 hover:shadow-2xl  hover:shadow-black 
            hover:bg-[#ff5e5e] mt-[22px]   relative   border-[rgba(0,0,0,0.2)] border-[2px]
             gap-2    md:w-[22%] md:gap-6  w-[40%] ">
          
           <div    className="image-container  w-[100%]  h-[100%]  flex justify-center align-center">
                <img  src={iteam.img}
                 className="w-[100%] h-[40vh]  object-cover  sm:h-[40vh]"/> 
                </div>
              <div className="info-container  transition-[2s] cursor-pointer flex  " >
              </div>
            <div className="boredr-2px border-red">
            <Link to="/in" >
            <svg  onClick={()=>handle(iteam)}  className="  w-[30px] h-6 cursor-pointer absolute bottom-0 left-0 bg-red-600 "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
              </Link>
              <svg  onClick={()=>click(iteam)}  className="w-[40px] h-7 p-2 cursor-pointer absolute bottom-0 right-0 bg-teal-600 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>  
             
              <div className=""></div>
            </div>
            
              </div> 
           
            </> 
            ))}
         </div>
        <NewsLetter />
        <Fotter />
      </div>






      </>
    
    

  )


}

export default Products
 
