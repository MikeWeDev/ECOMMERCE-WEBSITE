import {Link} from "react-router-dom"
function NavBar({size}) {
  return (
    <div className="h-[60px]  bg-white-500 m-5 rounded-md flex 
justify-between text-center">
      <div className="p-4  text-left w-[33.3%]  justify-around hidden sm:flex">
       <span className="cursor-pointer text-7 ">
        ENG
       </span>
        <input type="text" 
        className="w-15 mx-2 border  "/>  
    <svg width="20px" height="15px"
    className="my-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
    
        </div>
        <div className ="text-start  w-[33.3%] underline text-[20px] p-4  flex-1 font-bold sm:text-center">
        <Link to="/">MIKE</Link>
         
        </div>
        <div className =" text-[33.3%]  p-4  flex 
        justify-flex-end gap-2">
          <span className="mr-2 text-[15px] font-light">
           <Link to="/r">RIGISTER</Link> 
          </span>
          <span  className="mr-2 text-[15px] font-light">
          <Link to="/lo"> SIGN-IN</Link> 
          </span>
        <Link to="/c">
        <div className="relative">
        <svg className="my-1 cursor-pointer z-10" width="25px" height="20px"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
        <span className="text-xl absolute top-[-20px] right-0 text-red-800">
          {size}
        </span>
        </div>
        
         </Link>
          </div>
    </div>
  )
}

export default NavBar