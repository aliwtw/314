import React, { useState } from "react";
import './ServiceMain.css';
import IMAGES from "../graphics";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

const ServiceMain = () => {

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
              <Nav.Link href="/service/userList">Available Request</Nav.Link>
              <Nav.Link href="#user-management">User Management</Nav.Link>
              <Nav.Link href="#service-available">Services Available</Nav.Link>
              <Nav.Link href="#payments">Payments Management</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

      <div className="userpage-main">
        <div className="userpage-avatar-container">
          <img src={IMAGES.gongYoo} alt="avatar" className="userpage-avatar"/>
          <br />
          <h3>Professional Name</h3>
        </div>
      </div>
    </>
  );

}

export default ServiceMain;