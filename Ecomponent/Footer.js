import React from 'react'
import "./Footer.css"
import Instagram from "./Images/instagram.png"
import Youtube from "./Images/youtube.png"
import Facebook from "./Images/Facebook.png"

const Footer = () => {
    return (
        <>
            <div className='container-fluid myBackground'>
                <div className='row d-flex justify-content-evenly align-items-center '>
                    <div className='col-lg-2  my-5 fix'>
                        <h5 className='fw-bold p-1 my-1'>Vednidhi</h5>
                        <p className='fw-bold p-1'>At Frantically Speaking we want to solve the problem plaguing industries all over the globe:</p>
                    </div>

                    <div className='col-lg-2  my-5 fix'>
                        <p className='fw-bold p-1 my-2'>Subscribe to get Important Updates</p>
                        <label htmlFor='Email'></label>
                        <input name='Email' type='text' placeholder='Your Email' />
                        <button className='btn btn-dark fw-bold subscribe'>Subscribe</button>
                    </div>

                    <div className='col-lg-2  my-5 fix'>
                        <p className='fw-bold p-1 my-2'>Follow Us</p>
                        <div className='d-flex'>
                            <div className='instagram d-flex justify-content-center align-items-center mx-2'>
                               <a href='https://www.instagram.com/__v_ed__?igsh=MTF0eWpiMmJ5amwxbA=='><img className='m-auto p-2' src={Instagram} /></a>
                            </div>

                            <div className='instagram d-flex justify-content-center align-items-center mx-2'>
                                <a href='www.youtube.com/@indxatu6404'> <img className='m-auto p-2' src={Youtube} /></a>
                            </div>


                            <div className='instagram d-flex justify-content-center align-items-center mx-2'>
                               <a href=''><img className='m-auto p-2' src={Facebook} /></a> 
                            </div>
                        </div>

                    </div>

                    <div className='col-lg-2  my-5 fix'>
                        <p className='fw-bold p-1 my-2'>Call Us</p>
                        <p>+919306515029</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
