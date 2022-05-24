import React, { useState } from "react"
import './signin.css';
import { Form, Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Banner from "../pages/banner";

const SignIn = () => {

  const [loading, setLoading] = useState(false)

  async function handleSubmit() {

  }

  return (
    <div className="container">
      <Banner style={{marginBottom: '3rem'}} title="Roadside Asssistance"/>

      <Card>
        <Card.Body>
          <h2 className="text-center mb-2">Sign In</h2>
          <p className="mb-4">Hi there, nice to see you again!</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"  required />
            </Form.Group>
            <Link to="/user">
              <Button disabled={loading} className="w-100 mt-3" type="submit">
                Log In
              </Button>
            </Link>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-pass">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-4">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>

    </div>
  );
}

export default SignIn;