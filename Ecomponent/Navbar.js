import React from 'react'
import "./Navbar.css";
import { GrCart } from "react-icons/gr";
import { IoMdMenu } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../Context/Cart_Context';
import { useAuth0, } from "@auth0/auth0-react";  // auth external function for login 


// active class add of menu bar
const handleAdd=()=>{
  document.querySelector(".menubar").classList.add("active-menubar");

}
// remove actuuve class from menu bar 
const handleCut=()=>{
    document.querySelector(".menubar").classList.remove("active-menubar");
}

const Navbar = () => {

    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    const{cart_product}=useCartContext();
    let cartIconUpdate= cart_product.length;



    return (
        <>
            <nav>
                <div className='container-fluid myBackground'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-lg-4 col-6 '>
                            <NavLink to=''>
                                <div className='row ps-1 d-flex justify-content-center align-items-center'>
                                    <div className='col-lg-1 col-4  bg-dark text-white fs-5'>Ved</div>
                                    <div className='col-lg-1 col-4  bg-white text-dark fs-5'>store</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className='col-lg-8 col-6 border myclass'>
                            <ul className=' d-flex align-items-center justify-content-evenly pt-2 fs-4'>
                                <li className='  mt-2'><NavLink to="/">Home</NavLink></li>
                                <li className=' mt-2'><NavLink to="/About">About</NavLink></li>
                                <li className=' mt-2'><NavLink to='/Products'>Products</NavLink></li>
                                <li className=' mt-2'><NavLink to='/Contacts'>Contacts</NavLink></li>


                                {
                                
                                    isAuthenticated ? <span className='mt-3'>Hii, {user.name}</span> : null
                                }
                                

                                {
                                      isAuthenticated ?  <button className='btn btn-dark mybtn mt-2 ' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                                    : <button className='btn btn-dark mybtn mt-2 ' onClick={() => loginWithRedirect()}>Login</button>
                                }

                             
                               {   isAuthenticated ?  <NavLink to='/Cart' style={{color:"black",textDecoration:"none"}}>

                                 
                                 <GrCart className='cartIcon' />
                                 <span>{cartIconUpdate}</span>  
                                 </NavLink> :null

                               }
                                <IoMdMenu className='menuIcon' onClick={handleAdd}/>
                            </ul>
                        </div>
                        <div className='menubar'>
                        <ul className=' d-flex flex-column align-items-center justify-content-evenly  pt-2 fs-4'>
                                <FaWindowClose className='cutIcon' onClick={handleCut}/>
                                <li className='  mt-2'><NavLink to='/'>Home</NavLink></li>
                                <li className=' mt-2'><NavLink  to='/About'>About</NavLink></li>
                                <li className=' mt-2'><NavLink  to='/Products'>Products</NavLink></li>
                                <li className=' mt-2'><NavLink  to='./Contacts'>Contacts</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar 
