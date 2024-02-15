 const ProductReducer=(state,action)=>{

   switch (action.type) {
    case "API_SET_LOADING" :
        return{
            ...state,
            isLoading:true,
        }

    case "SET_API_ERROR":
        return{
            ...state,
            isLoading:false,
            isError:true,
        }


      case "SET_API_DATA":
        const featureProduct=action.payload.filter((curr)=>{return curr.featured===true})
        return{
         ...state,
         isLoading:false,
         Products:action.payload,
         FeaturedProduct:featureProduct,
        } 

        case "SET_SINGLEPAGE_LOADING":
            return{
                ...state,
                issingleLoading:true,
            };


        case "SET_SINGLEPAGE_DATA":
            return{
                ...state,
                issingleLoading:false,
                singleProduct:action.payload,

            }

        case "SET_API_ERROR":
            return{
                ...state,
                issingleLoading:false,
                isError:true,
            }

    default:
    return state;
} 
     
 }

 export default ProductReducer;