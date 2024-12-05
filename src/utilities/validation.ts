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


// const indexedDB = window.indexedDB 

// const request = indexedDB.open('userDatabase',1)
// request.onerror = function (event) {
//     console.error('Please check your information again.')
//     console.error(event)
// }

// request.onupgradeneeded = function () {
//     const db = request.result;
//     const store = db.createObjectStore('users', {keyPath:'id'});
//     store.createIndex('user_country',['country'],{unique:false});
//     store.createIndex('user_phoneNumber',['phoneNumber'], {unique:true})
//     store.createIndex('user_email',['email'], {unique:true})
//     store.createIndex('user_password',['password'], {unique:true})

// }

// request.onsuccess = function () {
//     const db = request.result;
//     const transaction = db.transaction('users','readwrite');
//     const userInformation = transaction.objectStore('users')
//     const countryIndex = userInformation.index('country')
//     const phoneNumberIndex = userInformation.index('phoneNumber')
//     const emailIndex = userInformation.index('email')
//     const passwordIndex = userInformation.index('password')


//     // store.put({id:1,colour:'Red',make:'Toyata'})
//     // store.put({id:2,colour:'Black',make:'Kia'})
//     // store.put({id:3,colour:'Blue',make:'Honda'})

//     userInformation.add(userData)

//     // const idQuery = store.get(3)
//     // const colorQuery = colourIndex.getAll(['Red'])
//     // const colourMakeQuery = makeModelIndex.get(['Blue','Honda'])

//     // idQuery.onsuccess = function () {
//     //     console.log('idQuery', idQuery.result)
//     // }

//     // colorQuery.onsuccess = function () {
//     //     console.log('colorQuery',colorQuery.result)
//     // }

//     // colourMakeQuery.onsuccess = function() {
//     //     console.log('colourMakeQuery',colourMakeQuery.result)
//     // }

//     transaction.oncomplete = function() {
//         db.close()
//     }

// }

export function generateRandomId() {
  return 'user-' + Math.random().toString(36).slice(2, 9); // 9-character unique ID
}