import React from 'react'
import "./MainProducts.css"
import Project from './Project'
import { useFilterContext } from '../Context/Filter_Context';


const MainProducts = ({Products}) => {
  const { filter_products} = useFilterContext();
  
  return (
    <> 
    
     { 

       filter_products.map((currElement,index)=>{
            return <Project key={currElement.id} {...currElement} />
        })
        
      } 
      
    </>
    
  )
}

export default MainProducts 
