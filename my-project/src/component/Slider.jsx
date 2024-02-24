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
     
     
       <div onClick={prevSlide}  className="w-[50px]  h-[50px]  rounded-md
      flex justify-center  cursor-pointer align-center absolute top-[20%] left-[-10] z-50 sm:top-[30%]">
  <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
   </div>
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
  
   
   <div onClick={nextSlide} className="w-[50px] h-[50px] rounded-md
      flex justify-center  cursor-pointer align-center absolute top-[20%] right-2 sm:top-[30%]">
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
   </div>
    </div>
    </div>
  )
}

export default Slider

const data = [
  {
      id:1,
      img:"images/photo_2024-02-23_14-27-41.jpg",
      title:'SUMMER SALE',
      desc:"DONT CONPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
      bg:"f5fafd"
  },
  {
      id:2,
      img:"images/R (1).png",
      title:'AUTOMINE COLLECTION',
      desc:"DONT CONPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
      bg:"fcf1ed"
  },
  {
      id:3,
      img:"images/photo_2024-02-23_14-27-45.jpg",
      title:'WINTER',
      desc:"DONT CONPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
      bg:"f5fafd"
  },
]