import CryptoJS from 'crypto-js';

export const PASSWORD_KEY = 'password'
export const EMAIL_KEY ='email'
export  const validEmail = 'bizzyB@gmail.com';
export const validPassword = 'nevergiveup';


export const validateEmail = (email:string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Invalid email format.";
  return null;
};


export const validatePassword = (password:string) => {
  if (password.length < 6) return "Password must be at least 6 characters long.";
  return null;
};

export const validatePhone = (phone:string) => {
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) return "Phone number must be 10 digits.";
  return null;
};


export const saveSession = (key:string,value:string) =>{
  return sessionStorage.setItem(key,value)
}

export const getSession = (key:string) =>{
  return sessionStorage.getItem(key)
}



export const encryptPassword = (password:string) => {
  const secretKey = import.meta.env.VITE_SECRET_KEY; 
  const encrypted = CryptoJS.AES.encrypt(password, secretKey).toString();
  return encrypted;
};

export const dencryptPassword = (encryptedPassword:string) => {
  const secretKey = import.meta.env.VITE_SECRET_KEY; 
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
  const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
  return originalPassword;
}