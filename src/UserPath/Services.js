import React, { useState } from "react";
import './Services.css';
import Banner from "../pages/banner";
import { Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";

const RequestService = () => {
  
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()  
    setLoading(true) 
    const form = event.target.elements 
    console.log(form)
  }


  return (
    <div className="container">
        <Banner title="How can we help?"/>
        <Card style={{ margin: '0' }}>
          <Card.Body>
            <h2 className="text-center mb-4">Service Request</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="vehicleMake">
                <Form.Label>Vehicle Make</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
              <Form.Group id="vehicleModel">
                <Form.Label>Vehicle Model</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
              <Form.Label>Service Required</Form.Label>
              <Form.Group>
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check 
                      type={type}
                      id={`towing`}
                      label={`Towing`}
                    />
                    <Form.Check 
                      type={type}
                      id={`fuel`}
                      label={`Fuel Delivery`}
                    />
                    <Form.Check 
                      type={type}
                      id={`battery`}
                      label={`Battery Replacement`}
                    />
                    
                  </div>
                ))}
              </Form.Group>
              <Form.Group id="description">
                <Form.Label>Brief Description</Form.Label>
                <Form.Control type="textarea" required />
              </Form.Group>
              <Button disabled={loading} className="w-100 mt-3" type="submit">
                Submit Request
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <Link to='/user' style={{marginTop: '1rem'}}>
          <span>
            Go Back
          </span>
        </Link>
      </div>
  );
}

export default RequestService;