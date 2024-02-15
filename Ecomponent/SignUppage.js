import React, { useState } from 'react'
import "./Signuppage.css"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './Images/FireBase'

const SignUppage = () => {

    const[userData,setUserData]=useState({
        Email:"",
        username:"",
        password:"",

    })

    const[field,setField]=useState('')


// Collect userInformation


 const HandleChange=(e)=>{
    const value=e.target.value;
    const name=e.target.name;
    
    setUserData((prev)=>{
        <label htmlFor='Email'></label>
        if(name === "Email"){
            return {
                ...prev,
                Email:value
            }
        }else if(name === 'username'){
          return{
            ...prev,
            username:value,
          }
        } else if(name==='password'){
            return{
                ...prev,
                password:value

            }
        }
       
    })
 }

 // on submit button the data will be recived in console

 const HandleSubmit=(e)=>{
    e.preventDefault();

    if(!userData.Email || !userData.username || !userData.password){
       setField("Firstly Fill All The Given Field")
       return
    }
    setField("");   // after filling all the field this error msg will remove automatically 

      //   console.warn(userData.Email,userData.password)


   // Firebase INbuild function
    
   createUserWithEmailAndPassword(auth, userData.Email, userData.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.warn(userCredential)
    // ...
  })
  .catch((error) => {
   // const errorCode = error.code;
   // const errorMessage = error.message;
   console.warn(error)
    // ..
  });

 
 // console.error(userData.length)
 
 }
 

  return (
    <>
      <div className='container-fluid bgdark'>
            <div className='row d-flex justify-content-center'>
                  <div className='col-lg-5  signupPage my-3 p-4 d-flex flex-column justify-content-center align-items-center loginPage'>
                  <h1>Sign Up</h1>
                    <form action='#' className=' d-flex flex-column gap-3' onSubmit={HandleSubmit}>
                        <label htmlFor='username'></label>
                        <input type='text' id='username' name='username' placeholder='Enter Your Username ' onChange={HandleChange} value={userData.username}/>
                        <label htmlFor='Email'></label>
                        <input type='text' id='Email' name='Email' placeholder='Enter Your Email ' onChange={HandleChange} value={userData.Email}/>
                        <label htmlFor='password'></label>
                        <input type='password' id='password' name='password' placeholder='Enter Your Password ' onChange={HandleChange} value={userData.password}/>
                        <button className='btn'>Submit</button>
                        
                    </form>
                    <span className='my-1'>{field}</span>
                    
                  </div>
            </div>
      </div>
    </>
  )
}

export default SignUppage




