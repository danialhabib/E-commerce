import React, { useState } from 'react'
import "./AddCart.css"
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../Context/Cart_Context';

const AddCart = ({singleProduct}) => {

 /* Import AddingCart function from cart_context  */

  const { AddtoCart }=useCartContext();


  //console.log(singleProduct);
  const{id,colors,stock}=singleProduct;
 // console.log(colors)
 // const[color,setColor]=useState(colors[0]);
  const[counter,setCounter]=useState(0);


  const plusIncrease=()=>{
    counter<stock ? setCounter(counter+1):alert(`Only ${stock} item Available in Stock`)
  }

  const plusDecrease=()=>{
    counter===0 ?alert("No Item Added"):setCounter(counter-1)  
  }
  return (
    <>
     <div className='container-fluid bg-white my-2'>
         <div className='row d-flex flex-column'>
             <div className='col-lg-4  my-2 p-2 d-flex justify-content-center justify-content-sm-start'>
             
               <p className='d-flex fw-bold my-2 fs-3'>Color:<span className='text-nowrap'>Technical Issues</span>
                          
         {/*  Some issues occured in this code solving  later  
         {
                colors.map((currColor,index)=>{
                  return <button 
                  className={color===currColor? "btn border colorBtn colorActive": " btn border colorBtn"}  
                  key={index} 
                  onClick={()=>{setColor(currColor)}}
                  style={{background:currColor}}>
                   {color===currColor ? <FaCheckCircle/> :null}  
                   
    
                  </button>
                  
                })
               }    */}

               </p>
               
             </div>

             <div className='col-lg-4  p-2 d-flex justify-content-start'>
                <FaCircleMinus className='minusLogo my-1 me-3' onClick={plusDecrease} />
                <h4 className='fw-bold fs-2 ms-1'>{counter}</h4>
                <FaPlusCircle className='plusLogo my-1 ms-4' onClick={plusIncrease} />
             </div>
            <div className='col-lg-3 my-2 p-1  d-flex justify-content-center justify-content-sm-start'>
           <NavLink to={counter===0 ? " ": "/Cart"}>  {/* Condition to routing */}
           <button 
           className='btn btn-dark fw-bold cartBtn me-1'
           onClick={()=>AddtoCart(id,/*color,*/counter,singleProduct)}
            disabled={counter===0}                                     
           >Add to Cart</button></NavLink>  
             </div> 
         </div>
     </div>
    </>
  )
}

export default AddCart
