import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import "./EmptyCart.css"
import { NavLink } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <>
    
       <div className='container-fluid'>
           <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-lg-5  my-4 p-1 d-flex flex-column  align-items-center'>
                 <FaCartArrowDown className='bigCartIcon'/>
                 <h1 className='my-3 ms-5'>Your Cart is empty !</h1>
                 <NavLink to="/Products">
                 <button className='btn btn-primary my-3 ms-5'>shop now</button>
                 </NavLink>
            </div>
           </div>
       </div>

    </>
  )
}

export default EmptyCart
