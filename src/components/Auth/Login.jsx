import React, { useState } from 'react'

const Login = ({handleLogin}) => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        // console.log("email is ", email)
        // console.log("password is ", password)

        setEmail("")
        setPassword("")
    }



  return (
    <div className='flex h-screen w-screen items-center justify-center '>
        <div className='p-20 rounded-lg mt-20 bg-black bg-cover bg-center bg-no-repeat'>
            <form
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center '>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                 required 
                className='outline-none bg-transparent border-2 border-purple-700 font-bold text-lg py-2 px-6 rounded-full  placeholder:text-white' type="email" placeholder='Enter your email' />
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-2 border-purple-700 font-bold text-lg py-2 px-6 rounded-full mt-3 placeholder:text-white' type="password" placeholder='Enter password' />
                 <button className='mt-7 text-white border-none outline-none hover:bg-cyan-500  font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
            </form>

        </div>
     
    </div>
  )
}

export default Login
