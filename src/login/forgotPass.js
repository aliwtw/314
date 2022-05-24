import React, { useState } from "react"
import './signin.css';
import { Form, Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Banner from "../pages/banner";

const ForgotPass = () => {

  const [loading, setLoading] = useState(false)

  async function handleSubmit() {

  }

  return (
    <div className="container">
      <Banner style={{marginBottom: '3rem'}} title="Roadside Assistance"/>

      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-2" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/signin">Sign In</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>

    </div>
  );
}

export default ForgotPass;