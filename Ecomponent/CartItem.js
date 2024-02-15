import React, { useState } from 'react'
import "./CartItem.css"
import Iphone6s from "../Ecomponent/Images/yellow.jpg"
import { FaCircleMinus } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PriceConverter from '../PriceHelper/PriceConverter';
import { useCartContext } from '../Context/Cart_Context';


const CartItem = ({id,price, Image,name,amount,stock}) => {


  const{  deleteCartItem,cartDecrease,cartincrease ,cartplusIncrease}=useCartContext();

  
  return (
    <>
        
         <div className='col-lg-6  my-2 p-3 d-flex gap-1 ms-1'>
           

            <div className='col-lg-4  backgroundImage'>
               <img src={ Image } className='iphone6s p-3'/>
            </div>

            <div className='col-lg-6'>
                <h1 className='text-dark ps-1 fw-bold text-nowrap'>{name}</h1>
                <p className='text-dark ps-1'>Color: <span>Technical Issues </span></p>
                <p className='text-dark ps-1'>price : <span>{amount!==0?<PriceConverter price={price}/>:0}</span></p>
                <p className='text-center'> <MdDelete className='DeleteIcon' onClick={()=>deleteCartItem(id)}/> Remove Item</p>
                <p  className='text-dark ps-1 text-center'>SubTotal <span>{amount!==0?<PriceConverter price={price*amount}/>:0}</span></p>

            </div>


            <div className='col-lg-2  p-2 d-flex justify-content-start align-items-center'>
                <FaCircleMinus className='minusLogo my-1 me-3' onClick={()=> cartDecrease(id)} />
                <h4 className='fw-bold fs-2 ms-1'>{amount}</h4>
                <FaPlusCircle className='plusLogo my-1 ms-4' onClick={()=>cartincrease(id)} />
             </div>

         </div>


         
    </>
  )
}

export default CartItem
