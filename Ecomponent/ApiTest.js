import React, { useEffect } from 'react'
import axios from 'axios';

const ApiTest = () => {

    const url= "https://api.pujakaitem.com/api/products";

    const api=async(url)=>{
        const res= await axios.get(url)
        console.log(res)
        const a=await res.data;
        console.log(a) 

   
}

api(url)
    




    
  return (
    <>
      <p>hello</p>
    </>
  )
}

export default ApiTest
