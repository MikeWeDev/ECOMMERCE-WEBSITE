
import {useState} from 'react'
function Rigister() {
 
 
  return (
    <div className="w-full h-[100vh] border justify-center flex items-center bg-cover 
    bg-[url('C:\Users\Lia\Desktop\REACT-PROJECTS\ECOMMERCE\my-project\public\images\82833577_587038971846970_2179314450611749326_n.jpg')]
     opacity-[0.8]">
        <div className="wrapper h-[70%] w-[80%] flex flex-col justify-center items-center bg-white opacity-80">
            <h1 className="font-bold  text-xl w-1/2 p-2 sm:text-3xl">Create Account</h1>
            <form onSubmit={handleSubmit}   action="" key={Math.random(10)} className="  flex w-full flex-col gap-3" >
                <input classNam=" font-bold p-2" typ="name" placeholder="name" />
                <input className=" font-bold p-2" type="last name" placeholder="last name"/>
                <input className=" font-bold p-2" type="username" placeholder="user name" />
                <input className=" font-bold p-2" type="password" placeholder="pasword"/>
                <input className=" font-bold p-2  mb-8"  type=" password" placeholder="confirm password" />
        <button onClick={handleSubmit} className="bg-teal-500 p-2  text-white translate-x-[50%] w-1/2 ">
            Create
        </button>
            </form>
        </div>
    </div>
  )
}

export default Rigister
