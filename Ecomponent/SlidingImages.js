import React, { useEffect, useState } from "react";
import "./SlidingImages.css";
import Image1 from "../Ecomponent/Images/Image1.jpg";
import Image2 from "../Ecomponent/Images/Google.png";
import Image3 from "../Ecomponent/Images/Image3.jpg";
import Image4 from "../Ecomponent/Images/Image5.jpg";
import axios from "axios";
import { ProductContext } from "../Context/ProductContext";

const SlidingImages = () => {
  const data = [
                       
        {
        
           src :"https://www.pngall.com/wp-content/uploads/9/Gadget-PNG-Pic.png"
    
        },

        {
        
            src : "https://m.media-amazon.com/images/G/01/DeveloperBlogs/AmazonDeveloperBlogs/legacy/gen8-family-shot_(2)._CB520508842_.png",

     
         } , 


         {
        
            src : "https://pngimg.com/uploads/macbook/macbook_PNG35.png"
     
         } ,  


         {
        
            src : "https://pngimg.com/uploads/watches/watches_PNG101443.png"
         }   
    ]


   
  

  console.error(data);

   const[state,setState]=useState(0);

   const plus=()=>{
    if(state>=3){
        setState(0)
    }else{
        setState(state+1)
    }
   }

   setInterval((plus),5000)

  return (
    <>
   
       <div className="container-fluid bg-dark Maincontainer">
             <div className="row d-flex justify-content-center">
                {
                    data.map((curr,id)=>{
                        return  <div className="col-lg-8">
                    {state===id ? <img src={curr.src} className="SlideImage p-2"/> :null}
                 </div>
                    })
                }

             </div>
               <div className="col-lg-12 border border-dark d-flex justify-content-between">
             <button className="btn btn-dark text-dark slideBtn ms-3" onClick={plus}>Next</button>
             </div>
      </div>
      
    </>
  );
};

export default SlidingImages;
