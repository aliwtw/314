import React, { useState } from "react";
import './UserMain.css';
import IMAGES from "../graphics";
import { Card, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

const UserMain = () => {



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
      
      <br/>
      <Card style={{backgroundColor: "#008f8a"}}>
        <Card.Body>
          <div className="userpage-avatar-container">
             <img src={IMAGES.gongYoo} alt="avatar" className="userpage-avatar"/>
             <br />
             <h3 style={{color: "white"}} >User's Name</h3>
           </div>
        </Card.Body>
       </Card>
       <Card>
         <Card.Body>
          <div className="userpage-detail-container">
            <h3>About you</h3>
            <p>Email: </p>
            <p>Contact: </p>
            <p>Address: </p>
            <p>Membership status: </p>
            <br />
            <h3>Vehicles</h3>
            <p>Car 1</p>
            <p>Car 2</p>
          </div>
        </Card.Body>
      </Card>
    </>
  );

}

export default UserMain;