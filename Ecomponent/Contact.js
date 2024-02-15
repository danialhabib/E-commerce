import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <>
     <div className='container-fluid bg-white'>
        <div className='row d-flex justify-content-evenly'>
            <div className='col-lg-4  d-flex flex-column justify-content-center my-5 p-5'>
                <h1 className='text-start fw-bold'>Contact Us</h1>
                <p>Need to get in touch with us?Either fill out the form 
                   with your inquiry or find the <span>department email</span>
                    you had like to contact below.
                </p>
            </div>

            <div className='col-lg-6  d-flex flex-column ustify-content-center my-3 p-3'>
                <form className='d-flex flex-column pt-2 justify-content-evenly align-items-center myForm'
                 action='https://formspree.io/f/mjvngoql'
                 method='POST'
                >
                  <label htmlFor='name'></label>
                  <input type='text' placeholder='Enter your Name' name='Username' autoComplete='off'/>

                  <label htmlFor='email'></label>
                  <input type='email' placeholder='Enter Your Email' name='Email' required autoComplete='off'/>

                  <textarea maxLength={50} placeholder='Type a message...' name='Message' required autoComplete='off'/>
                  <button className='btn btn-dark fw-bold submit'>Submit</button>
                </form>
               
            </div>
        </div>
     </div>
    </>
  )
}

export default Contact
