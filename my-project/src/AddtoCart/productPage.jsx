import {Link} from "react-router-dom"
import datas from '../productD'
import NewsLetter from "../component/NewsLetter";
import Fotter from "../component/Fotter";
import { useState } from "react";


function Products(props) {
    const {click} = props;
   
     return (
     
      <div className="">
         <div className="fiter-container flex justify-between items-center mt-[100px]">
        <div className="filter1 mx-10 font-semibold text-[15px] ">
             <h1 className='block text-5 sm:flex'> Filter product</h1>  
          <select className='mx-2 my-3 p-1 text[20px] border border-black border-3'>
            <option value="selected">
             White
            </option>
            <option value="black" >Black</option>
            <option value="">Red</option>
            <option value="">Blue</option>
            <option value="">Yellow</option>
            <option value="">Green</option>
          </select>
          <select className='mx-2 p-1 text[15px] border border-black border-3'>
            <option value="selected">
             size
            </option>
            <option value="">xs</option>
            <option value="">sm</option>
            <option value="">md</option>
            <option value="">lg</option>
            <option value="">xl</option>
          </select>
        </div>
        <div className="filter2 mx-10  font-semibold text-[14px]">
        <h1 className='block text-5 sm:flex'>  Sort product
</h1>  
         <select className='  p-1 text[15px] border border-black border-3 '>
            <option value="selected">
              Newest
            </option>
            <option value="">Price(asc)</option>
            <option value="">Black(desc)</option>
          </select>
        
        </div>
      </div>
        
  <div className="flex flex-wrap justify-between bg-[rgba(0,0,0,0.1)] align-center mt-[70px]  ">
    {datas.map((iteam)=>(
            <>
            <div key={iteam.id} className="box-container hover:scale-110 hover:shadow-2xl  hover:shadow-black hover:bg-[#ff5e5e] mt-[22px]  w-[40%]  relative m-5  border-[rgba(0,0,0,0.2)] border-[2px]
            sm:w-[20%] gap-2 ">
          
           <div    className="image-container  w-[100%]  h-[100%]  flex justify-center align-center">
                <img  src={iteam.img}
                 className="w-[100%] h-[40vh]  object-cover  sm:h-[40vh]"/> 
                </div>
              <div className="info-container  transition-[2s] cursor-pointer flex  " >
              </div>
            <div className="">
            <Link to="" >
              <svg  onClick={()=>click(iteam)}  className="w-[40px] h-7 p-2 absolute bottom-0 right-0 bg-teal-600 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>  
              </Link>
              <div className=""></div>
            </div>
            
              </div> 
           
            </> 
            ))}
         </div>
        <NewsLetter />
        <Fotter />
      </div>
    

  )


}

export default Products
 
