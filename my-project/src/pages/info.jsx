import NewsLetter from '../component/NewsLetter'
import Fotter from '../component/Fotter'
import { useState } from 'react'

function Info({info,carts,setInfo,handleChange}){
  const [color,setColor] = useState(`red`)
 
   const handleColor =()=>{
    setColor(`green`)
   }
  const handleRemove=(id)=>{
    const arr=info.filter((iteam)=>iteam.id !== id)
    setInfo(arr);
  }
 
     
  
 
    return(
        <div className="mt-28 overflow-hidden">
      <div className="wrapper flex jsutify-between  flex-col ">
       {info.map((iteam,index)=>(
        <>
        <div  key={index} className="cont  flex-col md:flex md:flex-row border border-black pb-10 ">
        <div className="img-con flex-2  ">
    <img className='h-[350px]] w-[350px]'  src={iteam.img} alt="" />
</div>
 <div className="info-con flex-1 mt-10">
    <h1 className='text-[40px] mb-5 font-semibold '>{iteam.Name}</h1>
    <p className="text-xl mb-5">
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Velit rem accusamus dolore eaque fuga sunt illum non tenetur aperiam reprehenderit.
    </p>
    <p  className='text-3xl mb-5'>
    {parseFloat(iteam.price) * iteam.amount}$
    </p>
  
    <div className="flex flex-col  gap-5 ">
   
    <div className="filter-con  flex justify-start">
<select className='mr-40 p-2 text[20px] border border-black border-3'>
    <option value="">size</option>
    <option value="">xs</option>
    <option value="">sm</option>
    <option value="">md</option>
    <option value="">lg</option>
    <option value="">xl</option>
  </select>
    </div>
  <div className="flex justify-around w-[70%]">
  <span onClick={()=>handleChange(iteam, 1)}  className="border-[2px] border-black h-14 w-10 text-5xl  cursor-pointer"
  >+
  </span>
  <span className="underline  h-14 w-10 text-5xl  cursor-pointer">
    {iteam.amount}
  </span>
  <span  onClick={()=>handleChange(iteam, - 1 )} className=" border-[2px] border-black h-14 w-10 text-5xl pl-2  cursor-pointer">
    -
    </span>
  <span onClick={()=>handleRemove(iteam.id)} className="font-bold text-xl pt-2 underline text-blue-800  cursor-pointer">
    Remove</span>
 </div>
  </div>
 
<div className="add-con flex mt-14">

<button  onClick={()=>carts(iteam)}>
   <span onClick={()=>handleColor()} style={{border:`4px solid ${color}` }}
    className='cursor-pointer font-bold p-3 text-lg '> 
   ADD TO CART</span> 
</button>
</div>

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

export default Info
