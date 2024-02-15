import React from 'react'
import "./Cart.css"
import { useCartContext } from '../Context/Cart_Context'
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';
import EmptyCart from './EmptyCart';
import PriceConverter from '../PriceHelper/PriceConverter';

const Cart = () => {

  const { cart_product, clearCart,total_price,shipping_fee } = useCartContext();

  // find length of cart

  let cartProductItem = cart_product.length;
  //console.error(cart_product);

  const{price}=cart_product

  return (
    <>

      {/* Cart Item Added Here  */}

      <div className='container-fluid bg-white'>
        <div className='row'>
          <h1 className='text-dark'>{cartProductItem !== 0 ? `Cart = ${cartProductItem} Item` : <EmptyCart/>}</h1>
          {
            cart_product.map((curr, index) => {
              return <CartItem key={index} {...curr} />
            })
          }
        </div>
      </div>




      <div className='col-lg-6  my-3 p-3 d-flex justify-content-between'>
        <NavLink to="/Products">
         {cartProductItem !== 0 ? <button className='btn btn-primary border border-dark text-white'>Contine Shopping</button> :null}
        </NavLink>
        {cartProductItem !== 0 ? <button className='btn btn-danger' onClick={clearCart}>Clear Cart</button>:null}
      </div>

      <div className='d-flex justify-content-end'>

       {cartProductItem !== 0 ?  <div className='col-lg-3 border border-dark shippingTotal  my-2 p-3 d-flex flex-column justify-content-center mb-5'>
          <h1 className='text-center'>The Total Amount of</h1>

          <div className='d-flex justify-content-around my-2'>
            <p>Subtotal-</p>
            <p className='fw-bold'>
              <PriceConverter price={total_price}/>
            </p>
          </div>

          <div  className='d-flex justify-content-around my-2 shippingBottomBorder'>
            <p>Shipping Fee-</p>
            <p className='fw-bold'>
              <PriceConverter price={shipping_fee}/>
            </p>
          </div>

          
          <div  className='d-flex justify-content-around my-2 shippingBottomBorder'>
            <p>Order Total-</p>
            <p className='fw-bold'>
            <PriceConverter price={shipping_fee+total_price}/>
            </p>
          </div>
           

        </div> :null}

      </div>

    </>
  )
}

export default Cart
