

 const FilterReducer=(state,action)=>{

    switch (action.type) {
        case "SEND_DATA_TO_FILTER":

          /* price data fetch here and save into in new array */

           let priceArr=action.payload.map((curr)=>{
             return curr.price;
           })

           /* find maximum in price array */ 

           let maxPrice=priceArr.reduce((accum,curr)=>{        /* <- accum parameter means save first value of an array */
            return Math.max(accum,curr)                          
           },0);  /* <- Without zero this function will show error.here 0 is working as initial value */

          //  console.warn(maxPrice);

            return{
                ...state,
                // Cello Copy not a actual data using [...nameofdata]
                filter_products:[...action.payload],
                All_products:[...action.payload],
                filter:{
                    ...state.filter,
                    price:maxPrice,
                    maxval:maxPrice,        /* update filter section  */
                }

            }

            case "SET_VALUE_IN_FILTER":
                const{value,name}=action.payload;
                return{
                    ...state,                                  /* update all filter value using this code */
                    filter:{
                        ...state.filter,
                        [name]:value
                    }
                }
            
            case "FILTER_SEARCH_PRODUCTS":
            
             

                const{All_products}=state;   
               let tempData=[...All_products];

              const{text,category,company,colors}=state.filter;
              if(text){                                  /*      <- for search box selector  */
                tempData=tempData.filter((curr)=>{
                    return curr.name.toLowerCase().includes(text);
                })
              }
 


              if(category!=="All"){                                     /* <- for category selector  */
                tempData=tempData.filter((curr)=>{
                    return curr.category===category;
                })
              }


              if(company!=="All"){
                tempData=tempData.filter((curr)=>{
                    return curr.company===company;
                })
              }  

              if(colors!=="All"){
                tempData=tempData.filter((curr)=>{
                    return curr.colors.includes(colors);
                })
              }
            
            
               
               return{
                ...state,
                filter_products:tempData,
               }


            case "CLEAR_ALL_FILTER":
                return{
                    ...state,
                    filter:{
                        ...state.filter,   /* come all the filter object value then apply changes on this property using this syntax */
                        text:"",
                        category:"All",
                        company:"All",       /* All the values have been reset    */
                        colors:"All",
                    }
                }


        default:
           return state;

    }
}

export default FilterReducer