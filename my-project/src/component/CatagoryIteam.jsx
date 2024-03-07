import {Link} from "react-router-dom"
function CatagoryIteam() {

    return (
       <div className="flex flex-wrap justify-around align-center gap-4">
  {catagories.map((iteam,index)=>(
          <>
          <div key={index} className="box-container w-[40%] relative  border  border-black sm:w-[30%]">
         <div className="image-container opacity-100 w-[100%]  h-[100%]  flex justify-center align-center">
              <img  src={iteam.img}
               className="w-[100vw] h-[50vh]  object-cover sm:h-[60vh]"/>   
              </div>
              
              <div className="info-container absolute  bottom-0 flex flex-col justify-center align-center
              ">
                <h1 className="text-white mb-4 text-[14px] font-bold sm:text-[20]">
                {iteam.title}
                </h1>
                <button className="border text-center align-center w-[100%] bg-white text-gray-600 font-bold 
                sm:p-2">
                 <Link to="/p">Shop Now</Link>
                </button>
              </div>

            </div>   
          </> ))}
       </div>    
    ) 
}

export default CatagoryIteam

const catagories = [
    {
      img: "images/82833577_587038971846970_2179314450611749326_n.jpg",
      title: "Flat Slip On Pumps",
    
    },
    {
      img: "images/R4.png",
      title: "Knit Ballet Flat",
    },
    {
      img: "images/OIP3.png",
      title: "Nike Zoom Freak",

    },

    {
      img: "images/OIP (1).png",
      title: "PUMA BLACK-OCE",
    },
    {
      img: "images/cd5816dea22d0979ca0556cdb9b79fb5.jpg",
      title: "PUMA BLACK-OCE",
    },
   
  ];