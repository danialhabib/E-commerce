import React from 'react'
import "./Trusted.css"
import Paypal from "./Images/paypal.png"
import Mcafee from "./Images/mcafee.png"
import Facebook from "./Images/Facebook.png"
import Google from "./Images/Google.png"
import Meesho from "./Images/Meesho.png"

const Trusted = () => {
  return (
    <>
    <div className='container-fluid bg-dark'>
        <div className='row d-flex justify-content-around align -items-center'>
            <h4 className='text-center my-3 fw-bold text-white'>Trusted By 1000+ Comapnies</h4>
            <div className='col-lg-1 m-auto '>
                <img src ={Paypal} alt="Paypal.logo"  className='fs-5'/>
            </div>

            <div className='col-lg-1 m-auto'>
                <img src ={Meesho} alt="Ebay.logo"  className='companyLogo'/>
            </div>

            <div className='col-lg-1  m-auto '>
                <img src ={Google} alt="Google.logo" className='companyLogo' />
            </div>

            <div className='col-lg-1  m-auto '>
                <img src ={Facebook} alt="Facebook.logo"  className='companyLogo'/>
            </div>

            <div className='col-lg-1  m-auto '>
                <img src ={Mcafee} alt="Mcafee.logo"  className='companyLogo'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Trusted
