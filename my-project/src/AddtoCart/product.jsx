import {Link} from "react-router-dom"
import datas from '../productD'
import Slider from "../component/Slider";
import Catagory from "../component/Catagory";
import NewsLetter from "../component/NewsLetter";
import Fotter from "../component/Fotter";
function Product(props) {
    const {click,handle} = props;
     return (
      <div className="overflow-hidden">
         <Slider />
          <Catagory />
  <div className="flex flex-wrap justify-between bg-[rgba(0,0,0,0.1)] align-center mt-[70px] ">
    {datas.map((iteam)=>(
            <>
            <div key={iteam.id}
             className="box-container hover:scale-110 hover:bg-[#ff5e5e] hover:shadow-2xl  hover:shadow-black mt-[22px]  w-[40%]  relative m-5  border-[rgba(0,0,0,0.2)] border-[2px]
            sm:w-[20%] gap-2 ">
          
           <div className="image-container  w-[100%]  h-[100%]  flex justify-center align-center">
                <img  src={iteam.img}
                 className="w-[100%] h-[30vh]  object-cover sm:h-[40vh]"/> 
                  <div className="">
                    <div className="boredr-2px border-red ">
                    <Link to="/in" >
            <svg  onClick={()=>handle(iteam)}  className="  w-[30px] cursor-pointer h-6 absolute bottom-0 left-0 bg-red-600 "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
              </Link>
            <svg  onClick={()=>click(iteam)}  className="w-[30px] cursor-pointer h-6 absolute bottom-0 right-0 bg-teal-600 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>  
             
                    </div>
           
            
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

export default Product
 
