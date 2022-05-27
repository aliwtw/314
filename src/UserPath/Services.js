import React, { useState } from "react";
import './Services.css';
import Banner from "../pages/banner";
import IMAGES from "../graphics";
import { Link } from "react-router-dom";

const Services = () => {
  
  return (
    <div className="service_page">
      <Banner title="How can we help?"/>
      
      <div className='service_page_option'>
        <Link to="/user/services/tow">
          <button className="service_page_button">Tow</button>
        </Link> 
        <span>$100</span>
      </div>
      
      <div className='service_page_option'>
        <Link to="/user/services/tow">
          <button className="service_page_button">Lockout</button>
        </Link>
        <span>$79</span>
      </div>

      <div className='service_page_option'>
        <Link to="/user/services/tow">
          <button className="service_page_button">Fuel Delivery</button>
        </Link>
        <span>$79</span>
      </div>

      <div className='service_page_option'>
        <Link to="/user/services/tow">
          <button className="service_page_button">Tire Change</button>
        </Link>
        <span>$85</span>
      </div>

      <div className='service_page_option'>
        <Link to="/user/services/tow">
          <button className="service_page_button">Jump Start</button>
        </Link>
        <span>$80</span>
      </div>

      <Link to='/user' style={{marginTop: '1rem'}}>
        <span>
          Go Back
        </span>
      </Link>
      
    </div>
  );
}

export default Services;