import React, { useState } from 'react'
import "./Images.css"

  const Images = ({imgs=[{url:""}] /*Error occured in main image without this ({url})*/}) => {
   // console.warn(imgs)
   const[mainImage,setMainImage]=useState(imgs[0]);
  return (
    <>
    

           
                <div className='col-lg-3 col-md-3 col-sm-3 col-3 my-2 p-2'>
                      {
                        imgs.map((curr,i)=>{
                            return(
                                <img src={curr.url} className='my-1 myImages'

                                    onClick={()=>{setMainImage(curr)}}
                                />
                            )
                        })
                      }

              </div>


              <div className='col-lg-9 col-md-9 col-sm-9 col-9 p-4 d-flex align-items-center'>
                <img src={mainImage.url} className='mainImage'/>   
             </div>


    </>
  )
}

export default Images
