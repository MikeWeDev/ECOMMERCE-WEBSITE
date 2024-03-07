import { useEffect, useState } from "react"
import {Link} from "react-router-dom"

function Slider() {
  const [currentIndex,setCurrentIndex]=useState(0)
  const prevSlide = () =>{
   if(currentIndex === 0){
    setCurrentIndex(data.length - 1)
   }
   else{
    setCurrentIndex(currentIndex -1)
   }
   
  }
  const nextSlide = ()=>{
  if(currentIndex === data.length-1){
    setCurrentIndex(0)
  }
  else{
    setCurrentIndex(currentIndex + 1)
  }
  }
  useEffect(()=>{
    const interval=setInterval(()=>{
      prevSlide();
      nextSlide();
    },3000);
    return () =>{
      clearInterval(interval)
    }
  })
     
      
     
  
  return (
    
    <div className=" sliders mt-[120px] mb-[50px] flex bg-[#fcf1ed] w-[100vw] h-[120vh] align-center sm:h-[80vh]">
      <div className="w-[100%] flex   relative h-[120vh] overflow-hidden  sm:h-[100vh] ">
     
     
    
   <>
   {data.map((iteam)=>(
        <>
       <div key={iteam.id} style={{transform:`translateX(-${currentIndex * 100}vw)`}} 
       className="flex flex-col  w-[100vw] h-[90vh] align-center transition-all-2  sm:flex-row  ">
         <div className="image-container flex-1 h-[90vh] w-[100vw]">
          <img  src={iteam.img} alt=""
           className="h-[500px] w-[100vw] mt-2"/>   
          </div>
          <div className="info-container  flex-1 p-[28px] mt-10">
            <h1 className="text-[50px]">
            {iteam.title}
            </h1>
            <p className="my-[50px] text-[19px] font-blod">  
           {iteam.desc}
            </p>
            <button className="border p-3  border-black">
             <Link to="/p">Shop Now</Link> 
            </button>
          </div>
          </div>
        </>
      ))};
   </>
  
    </div>
    </div>
  )
}

export default Slider

const data = [
  {
      id:1,
      img:"images/R (1).png",
      title:'SUMMER SALE',
      desc:"DONT CONPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
      bg:"f5fafd"
  },
  {
      id:2,
      img:"images/R.png",
      title:'AUTOMINE COLLECTION',
      desc:"DONT CONPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
      bg:"fcf1ed"
  },
  {
      id:3,
      img:"images/1442800616550389959.jpg",
      title:'WINTER',
      desc:"DONT CONPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
      bg:"f5fafd"
  },
]