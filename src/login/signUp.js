import React, { useState } from "react"
import './signin.css';
import { Form, Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Banner from "../pages/banner";

const SignUp = () => {

  const [loading, setLoading] = useState(false)

  async function handleSubmit() {

  }

  return (
    <div className="container">
      <Banner style={{marginBottom: '3rem'}} title="Roadside Assistance"/>

      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-4">
        Already have an account? <Link to="/signin">Sign In</Link>
      </div>

    </div>
  );
}

export default SignUp;