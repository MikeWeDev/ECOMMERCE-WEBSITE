import Announsment from '../component/Announsment'
import Slider from '../component/Slider'
import Catagory from '../component/Catagory'
import NewsLetter from '../component/NewsLetter'
import Fotter from '../component/Fotter'
import Product from '../AddtoCart/product'
import Cart from '../AddtoCart/Cart'
import { useState } from 'react'
import NavBar from '../component/NavBar'
function Home() {
 
  return (
    <>
       <Announsment />
       <NavBar />
      <Slider />
      <Catagory />
      <NewsLetter />
      <Fotter />
    </>
   
  )
}

export default Home
