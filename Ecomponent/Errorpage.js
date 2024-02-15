import React from 'react'
import "./ErrorPage.css"
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
  return (
    <>
      <div className='container-fluid '>
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-lg-10 border my-5 p-5 d-flex flex-column justify-content-center align-items-center'>
                <h1 className='text-center fw-bold'>404</h1>
                <h2 className='text-center fw-bold'>UH OH! YOU're Lost.</h2>
                <p>The page you are looking for does not exist.How you got here is a mystery.But you can click the 
                   button below to go back to the homepage.
                </p>
                 <NavLink to='/'><button className='btn btn-dark homeBtn'>Home</button></NavLink> 
            </div>
          </div>
      </div>
    </>
  )
}

export default Errorpage
