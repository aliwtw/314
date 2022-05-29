import React, { useState } from "react";
import './AvailableCentre.css';
import './UserMain.css';
import { Card, Navbar, Nav} from "react-bootstrap";
import IMAGES from "../graphics";

const AvailableCentre = () => {

  const mockData = {
    serviceProviders: [
      { id: 1, name: 'Zeus', available: true, rating: 4}, 
      { id: 2, name: 'Oner', available: false, rating: 4}, 
      { id: 3, name: 'Faker', available: true, rating: 5}, 
      { id: 4, name: 'Gumayushi', available: false, rating: 3.5}, 
      { id: 5, name: 'Keria', available: true, rating: 5}
    ]
  };

  function signout(){
    localStorage.clear()
    window.location.href = "/signin"
  }

  return(
    <>
    <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <div onClick={()=> window.location.href = "/"} style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <img className="logo" src={IMAGES.logo} alt="logo"/>
            <span className="userpage-title">Roadside Asisstance</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav className="nav-links">
            <Nav.Link href="/user/services">Services</Nav.Link>
            <Nav.Link href="/user/available-provider">Available Providers</Nav.Link>
            <Nav.Link href="/user/payments">Payments</Nav.Link>
            <Nav.Link onClick={()=>signout()}>Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    <br />
    <div className="avai-container">
      {mockData.serviceProviders.map((provider) => {
          return (
            <>
              <Provider 
              name={provider.name} 
              available={provider.available}
              rating={provider.rating}
              />
              <br /> 
            </>
          );
        })
      }
    </div>
    </>
  );
}

const Provider = (props) => {

  const { name, available, rating } = props;
  const borderColor = available ? 'green' : 'red';

  return (
    <Card style={{ width: '18rem', border: `3px solid ${borderColor}`}}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Available: { available ? 'Yes' : 'No'}
          <br/> 
          Rating: {rating}/5
        </Card.Text>
      </Card.Body>
    </Card>
  );

}

export default AvailableCentre;

