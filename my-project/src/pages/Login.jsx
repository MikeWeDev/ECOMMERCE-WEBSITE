import {useState} from "react"
function Login() {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")

  const handleSubmit=()=>{
    setPassword("");
    setUsername("");
    alert(`ACCOUNT CREATED SUCCESSFULLY (${username})`)
 }
 
  return (
    <div className="w-full h-[100vh] border justify-center flex items-center bg-cover 
     bg-[url('C:\Users\Lia\Desktop\REACT-PROJECTS\ECOMMERCE\my-project\public\images\82833577_587038971846970_2179314450611749326_n.jpg')]
     opacity-[0.8]">
        <div className="wrapper h-[50%] w-[80%] flex flex-col justify-center items-center bg-white opacity-80">
            <h1 className="font-bold  text-xl w-1/2 p-4 sm:text-4xl">Sign In</h1>
            <form onSubmit={handleSubmit} className="  flex w-full flex-col gap-3" >
                <input className=" font-bold p-2"
                 type="name"
                  placeholder="username" 
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                />
                <input className=" font-bold p-2" 
                 type="password"
                 placeholder="password"
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                 />
        <button className="bg-teal-500 p-2  text-white translate-x-[50%] w-1/2 ">
            Create
        </button>
            </form>
        </div>
    </div>
  )
}

export default Login
