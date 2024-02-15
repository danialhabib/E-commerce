import React from 'react'
import "./AllItems.css"
import Sort from './Sort'
import MainProducts from './MainProducts'
import { useFilterContext } from '../Context/Filter_Context'
import Project from './Project'

const AllItems = () => {
    const { filter:{text} } = useFilterContext();
   //  console.warn(filter_products)
    return (
        <>
            <div className='container-fluid '>
                <div className='row'>
                    <div className='col-lg-12 border border-dark my-2 p-2'>
                        <Sort/>
                    </div>

                    <div className='col-lg-12 my-2 mybackground'>
                        <div className='container-fluid '>
                            <div className='row gap-1 d-flex justify-content-between'>
                            <MainProducts /* Products={filter_products} *//> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllItems
