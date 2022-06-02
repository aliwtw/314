import React, { useState } from "react";
import { useNavigate } from 'react-router';
import './AvailableCentre.css';
import './UserMain.css';
import { Card, Navbar, Nav, Form, Button} from "react-bootstrap";
import IMAGES from "../graphics";

const MembershipPayment = () => {

    const navigate = useNavigate()
    //const [loading, setLoading] = useState(false)

    function signout(){
        localStorage.clear()
        navigate("/signin")
    }

    return(
        <>
        <Navbar bg="dark" variant="dark"
            sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
            <div onClick={()=> navigate("/")} style={{ textDecoration: 'none', cursor: 'pointer' }}>
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
        <Card style={{backgroundColor: "#008f8a"}}>
            <Card.Body>
                <Form>
                    <Form.Group id = "creditCard">
                        <Form.Label>Credit Card</Form.Label>
                        <Form.Control type = "text" placeholder="Card Number" required />
                    </Form.Group>
                    <Form.Group id = "expiry">
                        <Form.Control type = "text" placeholder="Expiry MM/YYYY" required />
                    </Form.Group>
                    <Form.Group id = "cvc">
                        <Form.Control type = "text" placeholder="CVC/CVV" required />
                    </Form.Group>
                    <Form.Group id = "name">
                        <Form.Control type = "text" placeholder="Cardholder Name" required />
                    </Form.Group>
                    <Button className="w-100 mt-3" type="submit">
                    Submit Payment
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <Card style={{ width: '24rem', border: `none`}}>
        <Card.Body>
            <Card.Title>Roadside Assistance Membership</Card.Title>
            <Card.Text>
            Enjoy free roadside services anytime when you are member!
            With only $99.99 per year, you will have full access to all our experts around you!
            </Card.Text>
        </Card.Body>
        </Card>
        </>
    );
}

export default MembershipPayment;