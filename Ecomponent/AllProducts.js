import React from 'react'
import "./AllProducts.css"
import Filter from './Filter'
import AllItems from './AllItems'
import { useFilterContext } from '../Context/Filter_Context'


const AllProducts = () => {
    const{filter_products}=useFilterContext();

   // console.warn(filter_products);
    
  return (
    <>
        <div className='container-fluid'>
         <div className='row d-flex justify-content-around'>
            <div className='col-lg-3  my-2 p-1'>
                <Filter/>
            </div> 


            <div className='col-lg-9 my-2 p-1' >
                <AllItems/>
            </div>
         </div>
       </div>
    </>
  )
}

export default AllProducts
