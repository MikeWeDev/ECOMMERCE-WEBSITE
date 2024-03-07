import { useState } from "react"

function NewsLetter() {
  const [email,setEmail]=useState("")
  const handleclick = ()=>{
    setEmail("")
    alert("SUCESSFULLY RIGISTER FOR NEWS LETTER")
  }
  return (
    <div className="bg-white h-[60vh] flex items-center justify-center flex-col" >
      <div className="title text-[45px] mb-5 font-bold sm:text-[70px]">
    News Letter
      </div>
      <div className="disc text-[19px] mb-5 sm:text-[24px]">
Get Timely  Update From Favorite Products
      </div>
      <div className="iput-container border border-gray flex justify-between w-[50%] h-[40px] bg-white">
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className="w-full" placeholder="your email"/>
        <svg width='30px' onClick={handleclick} className="bg-green-600"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></svg>
        
      </div>
    </div>
  )
}

export default NewsLetter
