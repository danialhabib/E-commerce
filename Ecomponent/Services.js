import React from 'react'
import "./Services.css"
import { TbTruckDelivery } from "react-icons/tb";
import { GiCheckedShield } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Services = () => {
    return (
        <>
            <div className='container-fluid  mybackground'>
                <div className='row d-flex flex-lg-nowrap justify-content-around d-grid gap-0'>
                    <div className='col-lg-2 border p-5 m-5 bg-color mediaQuery p-lg-3'>
                        <div className='deliveryLogo d-flex justify-content-center align-items-center'>
                            <TbTruckDelivery className=' truckLogo' />
                        </div>
                        <p className='fw-bold ms-2 mt-1 myText'>Super Fast and Free Delivery</p>
                    </div>

                  <div className='col-lg-2 border p-5 m-5  bg-color size d-flex align-items-center justify-content-start'>
                        <div className='shieldLogo d-flex align-items-center'>
                            <GiCheckedShield className='Slogo  m-auto' />
                        </div>
                        <p className='fw-bold mt-3 ps-1 text-nowrap'>Non-Contact Shipping</p>
                    </div>

                <div className='col-lg-2 border p-5 m-5  bg-color size d-flex align-items-center justify-content-start'>
                        <div className='shieldLogo d-flex align-items-center'>
                            <RiMoneyDollarCircleFill className='Slogo m-auto' />
                        </div>
                        <p className='fw-bold mt-3 ps-1 text-nowrap'>Money-back Guaranteed</p>
                    </div>

                   <div className='col-lg-2 border p-5 m-5 bg-color mediaQuery p-lg-3'>
                        <div className='deliveryLogo d-flex justify-content-center align-items-center'>
                            <RiSecurePaymentFill className=' truckLogo' />
                        </div>
                        <p className='fw-bold ms-2 mt-1 myText'>Super Secure Payment System</p>
                    </div> 

                </div>
            </div>
        </>
    )
}

export default Services
