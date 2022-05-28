import React, { useState } from "react";
import './UserMain.css';
import IMAGES from "../graphics";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

const UserMain = () => {

  if(localStorage.getItem("uid") === null){
    window.location.href = "/signin"
    return( <>Sorry you are not signed In</>)
  }



  return (
    <>
      <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>

          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img className="logo" src={IMAGES.wrench} alt="logo"/>
              <span className="userpage-title">Roadside Asisstance</span>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
            <Nav className="nav-links">
              <span></span>
              <Nav.Link href="/user/services">Services</Nav.Link>
              <Nav.Link href="#location">Location</Nav.Link>
              <Nav.Link href="#available-person">Available Person</Nav.Link>
              <Nav.Link href="#payments">Payments</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

      <div className="userpage-main">
        <div className="userpage-avatar-container">
          <img src={IMAGES.gongYoo} alt="avatar" className="userpage-avatar"/>
          <br />
          <h3>User Name</h3>
        </div>
        
        <div className="userpage-info">
          <p>Credit: $100</p>
          <p>More Info: $100</p>
          <p>More Info: $100</p>
          <p>More Info: $100</p>
        </div>
      </div>
    </>
  );

}

export default UserMain;