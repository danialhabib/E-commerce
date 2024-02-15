import React, { useState } from 'react'
import "./LoginPage.css"
import { NavLink } from 'react-router-dom'

const LoginPage = () => {

    const[userVal,setUserVal]=useState({
        Email:"",
        password:""
    })

    const handleChange=(e)=>{

        const name=e.target.name;
        const value=e.target.value;

        setUserVal((prev)=>{
            if(name==='Email'){
                return{
                    ...prev,
                    Email:value,
                }
            }else if(name === "password"){
                return {
                    ...prev,
                    password:value
                }
            }
        })

    }

    const HandleSubmit=(e)=>{
       e.preventDefault();
    }
  return (
    <>
         <div className='container-fluid bgdark'>
            <div className='row d-flex justify-content-center align-items-center'>
                  <div className='col-lg-4  signupPage my-5 p-3 d-flex flex-column justify-content-center align-items-center loginPage'>
                  <h1>Login Here</h1>
                    <form action='#' className=' d-flex flex-column gap-3' onSubmit={HandleSubmit}>
                        <label htmlFor='Email'></label>
                        <input type='text' id='Email' name='Email' placeholder='Enter Your Email ' onChange={handleChange}/>
                        <label htmlFor='username'></label>
                        <input type='text' id='username' name='password' placeholder='Enter Your password' onChange={handleChange}/>
                        <button className='btn'>Login</button>
                    </form>
                      <NavLink  to="/Signup" className="my-2" >
                      <span className='my-2 registerHere'>Register Here</span>
                      </NavLink> 
                    
                  </div>
            </div>
      </div> 
    </>
  )
}

export default LoginPage
