const CartReducer=(state,action)=>{

    // Add Cart Items Task

    if(action.type==="ADD_TO_CART"){
        const{id,/*color,*/counter,singleProduct}=action.payload
        // console.error(singleProduct)


         /* if user select same product which is already present in cart ...in that case we have to inccrease amount */

         let sameProductChoose =state. cart_product.find((currElement)=>{         // find method find the same product
              return currElement.id === id    // curr element id match with already exist cart come in sameProductChoose variable
         })

       //  console.error(sameProductChoose);

        /* Find out cart where the existing product exist  */


          if(sameProductChoose){
             
            let update = state.cart_product.map((curr)=>{
         
                if(curr.id===id){
     // current cart product amount + new same product amount  
                    let updateAmount =curr.amount + counter  

                    // condition to new same product amount should not be greater than stock what if chnage in stock amount 
                    if(updateAmount>=curr.stock){
                        updateAmount=curr.stock
                    }
                    return {
                        ...curr,
                        amount :  updateAmount
                    }
                }
                // otherwise return complete element 
                else{
                    return curr;
                }
            })

            return {
                ...state,
                cart_product:  update                   // add to cart if existing product mathc with cart item with increase amount 

            }

          } else{
           
            
             /* Get cart item detail */

        let cartItem={                                       
            id:id,                       // It means id and color makes it unique id
            name:singleProduct.name,
            Image:singleProduct.image[0].url,
            amount:counter ,      
            price: singleProduct.price,   
            stock : singleProduct.stock,                   
        }

      //  console.error(cartItem) 

      
               return{
                 ...state,
                 cart_product:[...state.cart_product,cartItem]    // previous data and then add new data in cart  
}   
    
}
          }

       


    // Delete Cart Item Task
   
    if(action.type==="DELETE_CART_ITEMS"){
        

        let updateCartItem=state.cart_product.filter((curr)=>{
            return curr.id !==action.payload;
                                                                
        })

      //  console.error( updateCartItem);

        return{
            ...state,
            cart_product:updateCartItem

        }
    }


    // Delete all items in cart

    if(action.type==="CLEAR_ALL_CART_ITEMS"){
        return{
            ...state,
            cart_product:[],

        }
    }


    //  decrement the cart item present in cart

    if(action.type==="CART_DECREASE"){

        let updateAmount =state.cart_product.map((currElement)=>{
            if(currElement.id===action.payload){
             //  console.error(currElement)
             let decreaseAmount=currElement.amount-1
   
             // counter will not go below the 1
              if(decreaseAmount<=1){
                decreaseAmount=1
              }
   
             // return element with updation
             return{
               ...currElement,
               amount: decreaseAmount
             }
            }
        })
   
        return{
           ...state,
           cart_product:updateAmount
        }
   
       }

    // increment the cart item present in cart

    if(action.type==="CART_INCREASE"){

     let updateAmount =state.cart_product.map((currElement)=>{
         if(currElement.id===action.payload){
          //  console.error(currElement)
          let increaseAmount=currElement.amount+1

          // fix if counter greater than the stock

          if(increaseAmount>=currElement.stock){
            increaseAmount=currElement.stock
            alert(`Only ${currElement.stock} Items Available in stock`)
          }

          // return element with updation
          return{
            ...currElement,
            amount: increaseAmount
          }
         }
     })

     return{
        ...state,
        cart_product:updateAmount
     }

    }

    

    // Total price present in cart

    if(action.type==="COMPLETE_TOTAL_CART"){
       
        let total_price = state.cart_product.reduce((initialval,curr)=>{   /* Reduce method find largest element in array byadding all*/
            let{price,amount}=curr
            initialval=initialval+price*amount          /* Example initial value =0,ist loop if cart only have one item ->initialval+price*amount */
                                                                   //  0+1500*2 =3000
                     return initialval;                                /*  Example initial value =3000,2nd loop if cart only have two item ->initialval+price*amount*/
                                                                   // 3000+2000*3=9000
                                                                /*    same for all items which is present in cart at that time. */    
        },0)

        return{
            ...state,
            total_price: total_price
        }
    }


    return state;
}

export default CartReducer