import { useEffect, useState } from "react"

function Cart({Cart,setCart,handleChange,x}) {
  const [price,setPrice]=useState(0)
 
  const handlePrice=()=>{
    let answer = 0;
    Cart.map((iteam)=>(
    answer += iteam.amount * parseFloat(iteam.price)
    ))
    setPrice(answer)
  }
  
  const handleRemove=(id)=>{
    const arr=Cart.filter((iteam)=>iteam.id !== id)
    setCart(arr);
  }
 
  return (
   <div className="">
     {Cart.map((pro)=>(
         <div className="detail max-h-[700px] w-[900px] mt-[90px]  md:flex md:justify-around" key={Math.random(1)} >

<div className="product-detail  block  w-[40%] sm:flex">
<img className="w-[100%] h-[400px] " src={pro.img} alt="" />
</div>
<div className="mt-5 md:mt-24">
<h1 className='name font-semibold mb-1 text-lg'><strong>NAME:</strong>NIKE STRIPE</h1>
<p className='id font-semibold mb-1 text-md'><strong>ID:</strong>22334567</p>
<div className="h-[20px] w-4 bg-red-500 rounded-full"></div>
<p className='size font-semibold mb-1 text-md'><strong>SIZE:</strong>37.8</p>
</div>

<div className="mt-5 md:mt-[110px]">
  <span className="text-xl font-bold border-[3px] border-red-400 p-2">{parseFloat(pro.price) * pro.amount}$</span>
 </div>
 <div className="flex gap-5 mt-5 md:mt-24">
  
  <span onClick={()=>handleChange(pro, 1)}  className="border-[2px] border-black h-14 w-10 text-5xl  cursor-pointer"
  >+
  </span>
  <span className="border-[2px] pl-1 border-black h-14 w-10 text-5xl  cursor-pointer">
    {pro.amount}
  </span>
  <span  onClick={()=>handleChange(pro, - 1 )} className="border-[2px] border-black h-14 w-10 text-5xl pl-2  cursor-pointer">
    -
    </span>
  <span onClick={()=>handleRemove(pro.id)} className="font-bold text-xl pt-2 underline text-blue-800  cursor-pointer">
    Remove</span>
 </div>

 </div>


       ))}
       <div className=" summery p-3 font-semibold mt-[10vh] rounded-md border-[0.3px] border-gray-600 mb-20  w-[50%] md:w-[25%]">
        
        <h1 className='font-bold text-xl '>ORDER SUMMARY</h1>
       <div className="summery-items my-6 flex justify-between">
         <span>ORDER SUMMER </span>
         <span>{price}$</span>
       </div>
      
       <div className="summery-items my-6 flex justify-between">
         <span>NO PRODUCT ORDERS</span>
         <span>{x}<span className="ml-2">ITEMS</span></span>
       </div>
       <div className="summery-items my-6 flex justify-between">
         <span>SHIPING DISCOUNT </span>
         <span>$ -2.30</span>
       </div>

       <div className="summery-items text-xl my-6 flex justify-between">
         <span> TOTALL </span>
         <span>{((price-2.30))}$ </span>
       </div>

       <button  className='w-full p-3 text-white bg-black '>CHECKOUT NOW</button>

         </div>

      </div>
      
       
  )
}


export default Cart
