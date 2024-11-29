
import React from 'react'
import { useState } from 'react';
import Social from '../components/social'
import { IoMdEye ,} from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaTwitter  } from "react-icons/fa";
import {validateEmail,validatePassword,validatePhone } from '../utilities/validation'


function SignUp() {
  const [country,setCountry] = useState('country 1')
  const [error,setError] = useState('')
  const [userData, setUserData] = useState({
    email:'',
    password:'',
    phoneNumber:''
  })

  function handleCountryChange(e:React.ChangeEvent<HTMLSelectElement>) {
    setCountry(e.target.value)
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
 
  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if(validatePhone(userData.phoneNumber)) {
      setError(validatePhone(userData.phoneNumber) as string)
      return
    }

    if(validateEmail(userData.email)){
      setError(validateEmail(userData.email) as string)
      return
    }

    if(validatePassword(userData.password)) {
      setError(validatePassword(userData.password) as string)
      return
    }
 
    sessionStorage.setItem("userData", JSON.stringify(userData));
    alert("Data stored successfully!");
    setUserData({ email: "", password: "", phoneNumber: "" });
    setError('')
  }

  return (
    <>
      <div  className=" sm:flex sm:flex-row  sm:w-[80%] sm:mx-auto sm:mt-8 sm:gap-[26px]">
        <div className="hidden sm:w-[45%] sm:block sm:self-center" >
          <img src='/greenChair.png'/>
        </div>
        <div className='w-[80%] mx-auto mt-[40px] sm:self-stretch sm:w-[50%] sm:m-0 }'>
          <form  onSubmit={(e) => handleSubmit(e)} >
            <h1 className="text-center font-semibold text-2xl mb-[15px]">Create an account</h1>
            <select className="selectInput" value={country} onChange={(event) => handleCountryChange(event)} >
              <option>Country 1</option>
              <option>Country 2</option>
              <option>Country 3</option>
              <option>Country 4</option>
            </select>
            <input 
              type='tel' 
              name='phoneNumber' 
              className="input"
              placeholder="Phone number"
              value={userData.phoneNumber}
              onChange={handleChange}
              required
            />
            <input 
              type ='email' 
              name='email'  
              placeholder='Email' 
              className="input" 
              value={userData.email} 
              onChange={handleChange}
              required
            />

            <div className="relative">
              <input 
                type ='password' 
                name='password'  
                placeholder='Password' 
                className="input"
                value={userData.password} 
                onChange={handleChange}
                required
              />
              <div className="absolute top-3 right-2">
                <IoMdEye />
              </div>
            </div>
            <button 
              type='submit' 
              className="w-full bg-black text-white p-2.5 rounded-lg mb-2">Create account
            </button>
            {error && <p className="text-center  text-[16px] text-red-600">{error}</p>}
          </form>
          <div className="w-full  text-center my-2">.....................or.......................</div>
          <div className="text-center my-2">
            <p>
              Already have an account  
              <a className="no-underline text-red-600 hover:cursor-pointer ml-1">
                Sign in 
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


export default SignUp