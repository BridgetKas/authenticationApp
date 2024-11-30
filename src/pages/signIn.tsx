import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Social from '../components/social'
import { IoMdEye ,} from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaTwitter  } from "react-icons/fa";

function SignInPage() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('')
    const navigate = useNavigate();

    const validEmail = 'bizzyB@gmail.com';
    const validPassword = 'nevergiveup';

    function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
        if (e.target.name === 'email'){
          setEmail( e.target.value)
        }else if (e.target.name === 'password') {
          setPassword( e.target.value)
        }
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      if (validPassword === password && validEmail === email) {
        setError('')
        navigate("/userdashboard"); 
    } else {
      setError("Invalid email or password. Please try again."); 
      // setPassword(password)
      // setEmail(email)
    }
    }

  return (
    <>
    <div className=" sm:flex sm:flex-row sm:w-[80%] sm:mx-auto sm:mt-8 sm:gap-[26px]">
      <div className="hidden md:w-[45%] md:block md:self-center">
        <img src='/greenChair.png'/>
      </div>
      <div className='w-[80%] mx-auto mt-[40px] md:self-stretch md:w-[50%] md:m-0 }'>
            
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1 className="text-center font-semibold text-2xl mb-[15px]">Sign in</h1>
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
          {error && <p className="text-center  text-[16px] text-red-600">{error}</p>}
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