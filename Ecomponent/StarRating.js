import React from 'react'
import { GoStarFill } from "react-icons/go";
import { RiStarHalfFill } from "react-icons/ri";
import { IoIosStarOutline } from "react-icons/io";

const StarRating = ({ stars, reviews }) => {
   // console.log(stars)

    // Generate star length as well as print half full and blank star according to your condituon

    // Array method found in cdn  search on google
    /*
    Explanantion
    
    1.length is used to create how much star you need to?
     
    index ->[0,1,2,3,4]
    
    example star rating is 4.4 compare first stars>=index+1 =4.4>=0+1 it will run until value of star does not get small
    4.4>=4+1 is that case
    
    
    
    
    
    */
   
    const ratingStar= Array.from({ length: 5 }, (curr, index) => {
        let number = index + 0.5
        
        return(
         
            <span key={index}>
               {
                stars >=index+1 ? (<GoStarFill className='text-warning'/>):stars>=number?(<RiStarHalfFill className='text-warning'/>):(< IoIosStarOutline className='text-warning'/>)
               }
            </span>
        )

    })
    return (
        <>
         {ratingStar}
         <p>{reviews} customer reviews</p>
        </>
    )
}

export default StarRating
