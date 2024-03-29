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
  const handleCheck=()=>{
    setCart([]);
   alert(`SUCCESFULLY CHECKOUT $${price} value product`)
  }
     
  
  useEffect(()=>{
    handlePrice();
  })
 
  return (
   <div className="">
     {Cart.map((pro)=>(
         <div className="detail max-h-[700px] w-[900px] mt-[90px]  md:flex md:justify-around" key={Math.random(1)} >

<div className="product-detail w-[30%]">
<img className="w-[100%] h-[400px] " src={pro.img} alt="" />
</div>
<div className="w-[50%] mt-10 flex flex-col gap-y-10">
<div className="">
<h1 className='name font-semibold mb-1 text-lg'><strong>NAME:</strong>{pro.Name}</h1>
<p className='id font-semibold mb-1 text-md'><strong>ID:</strong>{pro.id}</p>
<div className="h-[20px] w-4  rounded-full" style={{backgroundColor:`${pro.color}`}}></div>
<p className='size font-semibold mb-1 text-md'><strong>TYPE:</strong>{pro.type}</p>
</div>

<div className="">
  <span className="text-xl font-bold border-[3px] border-red-400 p-2">{parseFloat(pro.price) * pro.amount}$</span>
 </div>
 <div className="flex gap-x-5 ">
  
  <span onClick={()=>handleChange(pro, 1)}  className="border-[2px] border-black h-14 w-10 text-5xl  cursor-pointer"
  >+
  </span>
  <span className="underline  h-14 w-10 text-5xl  cursor-pointer">
    {pro.amount}
  </span>
  <span  onClick={()=>handleChange(pro, - 1 )} className="border-[2px] border-black h-14 w-10 text-5xl pl-2  cursor-pointer">
    -
    </span>
  <span onClick={()=>handleRemove(pro.id)} className="font-bold text-xl pt-2 underline text-blue-800  cursor-pointer">
    Remove</span>
 </div>
</div>


 </div>


       ))}
       <div className=" summery p-3 font-semibold mt-[15vh] rounded-md border-[0.3px] border-gray-600 mb-20 
         md:w-[25%]">
        
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

       <button onClick={()=>handleCheck()}  className='w-1/2 md:w-full p-3 text-white bg-black '>CHECKOUT NOW</button>

         </div>

      </div>
      
       
  )
}


export default Cart
