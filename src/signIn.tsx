import React from 'react'
import { useState } from 'react';
import Social from './social'
import { IoMdEye ,} from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaTwitter  } from "react-icons/fa";

function SignInPage() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
        if (e.target.name === 'email'){
          setEmail( e.target.value)
        }else if (e.target.name === 'password') {
          setPassword( e.target.value)
        }
      }

  return (
    <>
    <div className="flex flex-row align-center w-[80%] mx-auto mt-8 gap-4">
      <div className="w-[35%]">
        <img src='/greenChair.png'/>
      </div>
      <div className='self-stretch w-[50%]'>
            
        <form >
          <h1 className="text-center font-semibold text-2xl">Sign in</h1>
          <input 
            type ='email' 
            name='email'  
            placeholder='Email' 
            className="input mb-5" 
            value={email} 
            onChange={handleChange}
            required
          />

          <div className="relative">
            <input 
              type ='password' 
              name='password'  
              placeholder='Password' 
              className="input mb-5"
              value={password} 
              onChange={handleChange}
              required
            />
            <div className="absolute top-3 right-2">
              <IoMdEye />
            </div>
          </div>
          <button 
            type='submit' 
            className="w-full bg-black text-white p-2.5 rounded-lg mb-1">Sign in
          </button>
        </form>
        <div className="w-full  text-center my-3">.....................or.......................</div>
        <div className="text-center my-3">
          <p>
            Don't have an account  
            <a className="no-underline text-red-600 hover:cursor-pointer ml-1">
              Sign up
            </a>
          </p>
        </div>
          <Social icon={<FcGoogle />} title='Continue with Google'/>
          <Social icon={<FaApple />} title='Continue with Apple'/>
          <Social icon={<FaTwitter />} title='Continue with Twitter'/>
      </div>
    </div>
  </>
  )
}

export default SignInPage