/*Context api:-It is used to send data from parent Element to all of their Child Element 

needs to Three Main Things 

1.Context->Createcontext
2.Provider
3.Consumer->To simplify that we will use the useContext hook

*/

import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer.js";

// Global warehouse we will collect all the data from here

//step1-> Create Context Api

const AppContext = createContext();

// Define initial stage

const url = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    Products: [],
    FeaturedProduct: [],
    issingleLoading:false,
    singleProduct:{},
}
//step2-> we need to provider which will access the data of any child element.we will wrap provider the parent component
const AppProvider = ({ children }) => {

    // Usereducer hook it perform varios task using one state 
    const [state, dispatch] = useReducer(reducer, initialState);

        // Get Data For Featured Product
 
    const api = async (url) => {
        dispatch({ type: "SET_API_LOADING" })
        try {
            const res = await axios.get(url)
            const data = await res.data;
         //   console.table(data)
            dispatch({ type: "SET_API_DATA", payload: data })

        } catch (error) {
            dispatch({ type: "SET_API_ERROR" })
        }

    }
          // Get Data For Single Page

     const SingleProduct=async(url)=>{
        dispatch({ type: "SET_SINGLEPAGE_LOADING" })
        try {
            const res=await axios.get(url);
            const singleProduct=await res.data;
         //   console.log( singleProduct)
            dispatch({ type: "SET_SINGLEPAGE_DATA", payload: singleProduct })
            
        } catch (error) {
            dispatch({ type: "SET_SINGLEPAGE_ERROR" })
        }
         
     }


     // fUNCTION RUN AFTER PAGE RELOADING USING THIS HOOK
    useEffect(() => {
        api(url)
    })

    return (
        // Provide value to create context
        <AppContext.Provider value={{ ...state,SingleProduct }}>
            {children}
        </AppContext.Provider>
    )
};

// custom hooks Access all the data in any child component using this hook

const ProductContext = () => {

    return useContext(AppContext);
}



export { AppProvider, AppContext, ProductContext };






































