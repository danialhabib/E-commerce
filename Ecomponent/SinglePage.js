import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext"
import { NavLink } from 'react-router-dom';
import "./SinglePage.css";
import PriceConverter from '../PriceHelper/PriceConverter';
import { TbTruckDelivery } from "react-icons/tb"
import { GiCheckedShield } from "react-icons/gi";
import { TbReplaceFilled } from "react-icons/tb";
import Images from './Images';
import StarRating from './StarRating';
import AddCart from './AddCart';

const API = "https://api.pujakaitem.com/api/products";
const SinglePage = () => {

  const { SingleProduct, issingleLoading, singleProduct } = ProductContext();
  //console.warn(singleProduct);

  const { id } = useParams();
  // console.warn(id)

  // desstructure singleProduct object element

  const { name, price, description, company, stock, image, stars, reviews } = singleProduct

  //console.log(stars)

  useEffect(() => {
    SingleProduct(`${API}?id=${id}`)
  }, [])

  return (
    <>
      <div className='container-fluid bg-success d-flex'>
        <NavLink to="/"><h3 className='text-white my-2'>Home/</h3></NavLink><h3 className='my-2 ms-2'>{name}</h3>
      </div>

      <div className='container-fluid bg-white'>
        <div className='row d-flex justify-content-around'>
          <div className='col-lg-6 my-5 p-3'>

            <div className='container-fluid bg-white'>
              <div className='row d-flex flex-row justify-content-around '>
                <Images imgs={image} />

              </div>

            </div>


          </div>

          <div className='col-lg-5 border my-3 p-3'>
            <div className='productDetail'>
              <h1>{name}</h1>
              <StarRating stars={stars} reviews={reviews} />
              MRP:<del>
                <PriceConverter price={price + 25000} />
              </del>
              <p className='fw-bold text-primary'>Deal of the day:<PriceConverter price={price} /></p>
              <p>{description}</p>
            </div>

            <div className='Delivery  d-flex justify-content-evenly'>

              <div className='freeDelivery'>
                <div className='logos mt-1 d-flex justify-content-center align-items-center'>
                  <TbTruckDelivery className='my-2 logo' />
                </div>
                <p className='ms-1 fontSize'>Free Delivery</p>
              </div>


              <div className='freeDelivery '>
                <div className='logos mt-1 d-flex justify-content-center align-items-center'>
                  <TbReplaceFilled className='my-2 logo ' />
                </div>
                <p className='ms-1 fontSize'>30 Days Replacement</p>
              </div>

              <div className='freeDelivery'>
                <div className='logos mt-1 d-flex justify-content-center align-items-center'>
                  <TbTruckDelivery className='my-2 logo ' />
                </div>
                <p className='ms-1 fontSize'>Ved Delivered</p>
              </div>

              <div className='freeDelivery'>
                <div className='logos mt-1 d-flex justify-content-center align-items-center'>
                  <GiCheckedShield className='my-2 logo ' />
                </div>
                <p className='ms-1 fontSize'>2 Year Warranty</p>
              </div>

            </div>

            <div className='container-fluid bg-white borderDown'>
              <div className='row'>
                <div className='col-lg-5  my-2 p-1 '>
                  <p>Available : <span className='fw-bold text-dark'>{stock > 0 ? "In Stock" : "Not Available"}</span></p>
                  <p>Brand : <span className='fw-bold text-dark'>{company}</span></p>
                </div>
              </div>
            </div>

            <AddCart singleProduct={singleProduct} />


          </div>


        </div>
      </div>


    </>
  )
}

export default SinglePage
