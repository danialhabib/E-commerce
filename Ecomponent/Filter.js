import React from 'react'
import "./Filter.css"
import { useFilterContext } from '../Context/Filter_Context';
import { ImSearch } from "react-icons/im";
import { FaFlagCheckered } from "react-icons/fa";
import PriceConverter from '../PriceHelper/PriceConverter';
import { FaCheckCircle } from "react-icons/fa";

const Filter = () => {

    const{filter:{text,price,maxval,minval,colors},updateProductText,All_products,clearFilters,category,company}=useFilterContext();
   //  console.error(price);
   // console.error(`min value ${minval} and max ${maxval}`);


   // console.warn(price);
   /*  Function to get Category related data  */
     
      const getCategoryData=(data,property)=>{
        let newValue=   data.map((curr)=>{
            return curr[property]
          })

          if(property==="colors"){
             newValue=newValue.flat();       /* flat method remove duplicate item of colors */
          }

        return  newValue=["All",...new Set(newValue)]   /*  [...]<-old data spread operator (new)<-keyword (set)<-data structure which don't allow duplicacy + value */
        //  console.warn(newValue)  
      }

    /* Catergory data stored here */

    let CategoryData=getCategoryData(All_products,"category");  /* CATEGORY Data is stored here  */
         // console.warn(CategoryData)
    let CompanyData=getCategoryData(All_products,"company")      /* Company data is stored here function same but parameter different  */
     // console.warn(CompanyData);
    let ColorData=getCategoryData(All_products,"colors")      /* Color data is stored here function same but parameter different  */
    // console.warn(ColorData);

     
  
    
   
  return (
    <>
      <div className='conatiner-fluid filterBackground'>
         <div className='row d-flex justify-content-center flex-column align-items-center'>
            <div className='col-lg-12 p-3  d-flex justify-content-center mySearch'>
               
                    <input placeholder='Search Your Product'
                     className='searchItem'
                     type="text" 
                     name="text"
                     value={text}                               /* search feature used here  */
 
                     onChange={updateProductText}
                    
                    ></input>

                    <div className='searchIcon'>
                       <ImSearch className='searchIcon'/>
                    </div>
            </div>

           <div className='col-lg-6  my-2 p-3 d-flex flex-column justify-content-around'>
                 {
                  CategoryData.map((curr)=>{
                  return <button
                   className='categoryBtn my-3'
                   type='button'
                   name='category'                            /* category data used here  */
                   value={curr}
                   onClick={updateProductText}
                  >
                  {curr}
                  </button>
                 })
                 }
            </div> 


              <div className='col-lg-5 mb-1 p-3 d-flex flex-column justify-content-center align-items-center '>
                  <h2 className='my-1 text-center text-black'>Company</h2>
                  <form action='#' className='my-1 companyForm'  >                                                   {  /* company data used here  */ }
 
                      <select className='my-1 companySelect' name='company' onClick={updateProductText} >
                      {
                         CompanyData.map((currElement)=>{
                          return <option name="company" value={currElement}  className='text-center'  >{currElement}  </option>
                         })
                      }   
                      </select>
                  </form>
              </div>

              <div className='col-lg-5 my-3 p-3 d-flex justify-content-center '>
                 {
                  ColorData.map((curr)=>{
                    if(curr==="All"){
                      return <button                                /* color product all section  */
                            type='text'
                            name='colors'
                            value={curr}
                            className='AllBtn'
                          //  style={{backgroundColor:curr}}
                    >
                      All
                    </button>

                    }
                    return <button 
                            type='text'
                            className={colors === curr ? "btn border colorBtn colorsactive" :"btn border colorBtn"}
                            name='colors'                                           /* color product section  */
                            value={curr}
                           style={{backgroundColor:curr}}
                           onClick={updateProductText}
                    >
                      {colors===curr? <FaCheckCircle className='checkIcon'/> :null}
                    </button>
                    
                  })
                 }

              </div>

              <div className='col-lg-4 my-3 p-2  border-white d-flex flex-column justify-content-center'>
                  <h3 className='text-black text-center '>Price</h3>                                                   {    /* price section   */  }
                  <p className='text-black text-center my-2'>
                      <PriceConverter price={price} />
                  </p>

                 <input
                  type='range'
                  className='rangeInput'
                  min={minval}
                  max={maxval}
                  name="price"
                  value={price}
                  onChange={updateProductText}
                 />
              </div>

              <div className='col-lg-4 p-2 mb-5 d-flex justify-content-center'>
                   <button className='btn btn-danger fw-bold clearFilterBtn' onClick={clearFilters}>Clear Filter</button>                        {    /*  CLear All Filter   */  }
              </div>
         </div>
      </div>
    </>
  )
}

export default Filter
