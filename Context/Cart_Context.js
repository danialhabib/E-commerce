import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer";

const CartContext=createContext();


// Get local storage data

 const getLocalStorageDAta=()=>{

  // Get method to get data from localstorage 

  let localStorageData=localStorage.getItem("VedEcommerceCart");

  // initially cart_product data was []<-empty array thats why we create this first
  if( localStorageData.length === 0){
    return []
  }else{
    return JSON.parse(localStorageData)    /* <- JSON.parse <- convert string to array or oject as always */
  }

}

const initialstate={
 // cart_product:[],            //<- before apply localstorage concept
  cart_product:getLocalStorageDAta(),             /* <- get local storage data in cart_product using function  */
  total_price:0,
  shipping_fee:5000,
}


 const  CartContextProvider=({children})=>{

 const[state,dispatch]=useReducer(reducer,initialstate)


//console.error(state.cart_product);


 /* Adding product in cart  */

 const AddtoCart=(id,/*color,*/counter,singleProduct)=>{
   dispatch({type:"ADD_TO_CART",payload:{id,/*[color,*/counter,singleProduct}})
 }


 /* Remove Item from Cart  */

 const deleteCartItem=(id)=>{
  dispatch({type:"DELETE_CART_ITEMS",payload:id})
 // console.error(id);
 }

 // decrement cart product value
 const cartDecrease=(id)=>{
  dispatch({type:"CART_DECREASE",payload:id})
 // console.error(id)
 }

 // increment cart product value
 const cartincrease=(id)=>{
  dispatch({type:"CART_INCREASE",payload:id})
 }

 



 /* push Cart data to localStorage (set and get basically available for localStorage) */

  
 // After page reloading the data will be push on localStorage using useEffect hook


 useEffect(()=>{

  dispatch({type:"COMPLETE_TOTAL_CART"})
  localStorage.setItem("VedEcommerceCart",JSON.stringify(state.cart_product))         /* JSON.stringify <- convert array/object into string bcoz localstorage accept string  */

 },[state.cart_product]); 
 

 // Clear Complete cart

 const clearCart=()=>{
  dispatch({type:"CLEAR_ALL_CART_ITEMS"})
 }

 // console.error(state.cart_product);


  return <CartContext.Provider value={{...state,AddtoCart, deleteCartItem,clearCart,cartDecrease,cartincrease}}>
         {children}
       </CartContext.Provider>
  

}

export {CartContextProvider}

export const useCartContext=()=>{
    return useContext(CartContext)
}