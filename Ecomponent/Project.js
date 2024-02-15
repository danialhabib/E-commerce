import React from 'react'
import "./Project.css"
import { NavLink } from 'react-router-dom'
import PriceConverter from '../PriceHelper/PriceConverter'

const Project = (curr) => {
    const{id,image,name,category,price}=curr;
  //  console.log(price)
  return (
    <>
   
            <div className='col-lg-3 border my-5 product bg-white zoom'>
              <NavLink to={`/singlepage/${id}`}> <img src={image} alt='IphoneXr' className='IphoneLogo mt-3 p-3'/></NavLink>
               <NavLink><button className='btn btn-primary fw-bold'>{category}</button></NavLink>

               <div className='productDetail d-flex justify-content-between'>
                   <h3 className='fw-bold mt-2'>{name}</h3>
                   <h3 className='fw-bold mt-2'>{<PriceConverter price={price}/>}</h3>
               </div>
            </div>
    
    </>
  )
}

export default Project
