
import React from 'react'
import { useState } from 'react';
import Social from '../components/social'
import { IoMdEye ,} from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaTwitter  } from "react-icons/fa";


function SignUp() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [phoneContact,setPhoneContact] = useState('')
  const [country,setCountry] = useState('country 1')
  const [error,setError] = useState({})
 // const [userData, setUserData] = ({
  //   email:'',
  //   password:'',
  //   phoneNumber:''
  // })


  const validateEmail = (email:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Invalid email format.";
    return null;
  };

  const validatePassword = (password:string) => {
    if (password.length < 6) return "Password must be at least 6 characters long.";
    return null;
  };

  const validatePhone = (phone:string) => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) return "Phone number must be 10 digits.";
    return null;
  };

  function handleCountryChange(e:React.ChangeEvent<HTMLSelectElement>) {
    setCountry(e.target.value)
  }

  // const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...[userData], [name]: value });
  //   setError({ ...error, [name]: null }); 
  // };
 
  function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    if (e.target.name === 'email'){
      setEmail( e.target.value)
      setError({ ...error, [e.target.name]: null }); 
    }else if (e.target.name === 'password') {
      setPassword( e.target.value)
      setError({ ...error, [e.target.name]: null }); 
    }else if (e.target.name === 'phoneNumber') {
      setPhoneContact( e.target.value)
      setError({ ...error, [e.target.name]: null }); 
    }
  }

  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // const newErrors = {
    //   email: validateEmail(userData.email),
    //   password: validatePassword(userData.password),
    //   phone: validatePhone(userData.phone),
    // };

    const newErrors = {
      email: validateEmail(email),
      password: validatePassword(password),
      phone: validatePhone(phoneContact),
    };

    const hasErrors = Object.values(newErrors).some((error) => error !== null);

    if (hasErrors) {
      setError(newErrors);
    } else {
      sessionStorage.setItem("userEmail", email);
      sessionStorage.setItem("userPassword", password);
      sessionStorage.setItem("userContact", phoneContact);
      // sessionStorage.setItem("userData", JSON.stringify(userData));
      alert("Data stored successfully!");
      // console.log("Data stored successfully!");

      // setUserData({ email: "", password: "", phone: "" });
      setEmail('')
      setPassword('')
      setPhoneContact('')
    }
  }

  return (
    <>
      <div className="flex flex-row align-center w-[80%] mx-auto mt-8 gap-4">
        <div >
          <img src='/greenChair.png'/>
        </div>
        <div className="self-center">
              
          <form  onSubmit={(e) => handleSubmit(e)} >
            <h1 className="text-center font-semibold text-2xl">Create an account</h1>
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
              value={phoneContact}
              onChange={handleChange}
              required
            />
            <input 
              type ='email' 
              name='email'  
              placeholder='Email' 
              className="input" 
              value={email} 
              onChange={handleChange}
              required
            />

            <div className="relative">
              <input 
                type ='password' 
                name='password'  
                placeholder='Password' 
                className="input"
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
              className="w-full bg-black text-white p-2.5 rounded-lg">Create account
            </button>
          </form>
          <div className="w-full  text-center my-3">.....................or.......................</div>
          <div className="text-center my-3">
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