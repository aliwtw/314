import React, { useState } from "react";
import './AvailableCentre.css';
import './UserMain.css';
import { Card, Navbar, Nav} from "react-bootstrap";
import IMAGES from "../graphics";

const UserPayment = () => {

  const mockData = {
    invoice: [
      { provider: 'Apple Service', service: 'Tow', amount: 100, date: '09/09/2009', paid: false}, 
      { provider: 'Samsung', service: 'Tire Change', amount: 200, date: '09/09/2009', paid: true},
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
            <Nav.Link href="/user">Profile</Nav.Link>
            <Nav.Link onClick={()=>signout()}>Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    <br />
    <div className="avai-container">
      {mockData.invoice.map((invoice) => {
          return (
            <>
              <Invoice
                provider={invoice.provider}
                service={invoice.service}
                amount={invoice.amount}
                date={invoice.date}
                paid={invoice.paid}
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

const Invoice = (props) => {

  const { 
    provider,
    service,
    amount,
    date, 
    paid
  } = props;
  const borderColor = paid ? 'green' : 'red';

  return (
    <Card style={{ width: '24rem', border: `3px solid ${borderColor}`}}>
      <Card.Body>
        <Card.Title>{provider} - {date}</Card.Title>
        <Card.Text>
          Amount: ${amount}
          <br/> 
          Service: {service}
          <br/>
          Paid: {paid ? 'yes' : 'no'}
        </Card.Text>
      </Card.Body>
    </Card>
  );

}

export default UserPayment;