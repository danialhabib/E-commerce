import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { ProductContext } from "./ProductContext";
import reducer from "../Reducer/FilterReducer.js";



const FilterContext=createContext();

const initialState={
    filter_products:[],
    All_products:[],
    filter:{
      text:"",
      category:"All",
      company:"All",
      colors:"All",
      price:0,
      maxval:0,
      minval:0,
    },
   
}





export const FilterContextProvider=({children})=>{

    
    const{Products}=ProductContext();
    const[state,dispatch]=useReducer(reducer,initialState);
 


    /* Send product data to filter_product  */
  useEffect(()=>{
    dispatch({type:"SEND_DATA_TO_FILTER",payload:Products})
  },[Products])


/* Clear all filter function */


const clearFilters=()=>{
   dispatch({type:"CLEAR_ALL_FILTER"});
}


  /* Get and update value of filter product  */


  const updateProductText=(e)=>{
    let value=e.target.value;
   // console.warn(value)
    let name=e.target.name;
   // console.warn(name)
    dispatch({type:"SET_VALUE_IN_FILTER",payload:{value,name}})
   // console.warn(value,name);
  }


  /* filter_product when any of state change present in filter object  */
  useEffect(()=>{
    dispatch({type:"FILTER_SEARCH_PRODUCTS"})   /*   <-for search box    */ 
    
  },[Products,state.filter])

 //console.warn(state.filter.price);

  
 // console.warn(state.filter_products)

   
   return <FilterContext.Provider value={{...state,updateProductText,clearFilters}}>
    {children}
   </FilterContext.Provider>
}

// Custom Hook

export const  useFilterContext=()=>{ 
    return useContext(FilterContext)
}


