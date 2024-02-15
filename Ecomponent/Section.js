import React from "react";
import "./Section.css";
import SectionImage from "./Images/AboutUsImage.png";
import { NavLink } from "react-router-dom";

const Section = (props) => {
  return (
    <>
      <section>
        <div className="container-fluid  my-1 p-5 mybackground">
          <div className="row d-flex justify-content-around align-items-center">
            <div className="col-lg-5   mt-1 ms-3">
              <div className="StoreDetail">
                <h5 className="text-start mt-1 text-success fw-bold ">
                  Welcome to
                </h5>
                <h1 className="text-start ms-2 fw-bold">{props.mydata}</h1>
                <p className="fw-bold">
                  Welcome to [Your E-commerce Website] - where passion meets
                  convenience. Founded with a vision to revolutionize the online
                  shopping experience, we pride ourselves on offering more than
                  just products; we offer a lifestyle. From fashion-forward
                  trends to everyday essentials, our curated selection caters to
                  every need and desire.<br/>
                  
                   At [Your E-commerce Website], we
                  believe in the power of connection. With a seamless interface
                  and user-friendly design, we're dedicated to making your
                  shopping journey effortless and enjoyable. Our commitment to
                  quality extends beyond our products to our customer service,
                  ensuring that every interaction leaves you feeling valued and
                  satisfied. Driven by innovation and fueled by a love for what
                  we do, we're constantly evolving to meet the ever-changing
                  demands of the digital marketplace. With a team of passionate
                  individuals behind the scenes, we're here to redefine the way
                  you shop online. Welcome to a world of endless possibilities.
                  Welcome to [Your E-commerce Website]. .
                </p>
                <NavLink to="/Products">
                  <button className="btn btn-dark me-4 fw-bold">
                    Shop Now
                  </button>
                </NavLink>
              </div>
            </div>

            <div className="col-lg-6  mt-2 me-5 position">
              <img src={SectionImage} alt="Family-shopping"></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
