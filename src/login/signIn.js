import React, { useState} from "react"
import { useNavigate } from 'react-router';
import './signin.css';
import { Form, Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Banner from "../pages/banner";
import {auth} from '../components/firebase';
import {signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {

  
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  if (localStorage.getItem("uid") !== null){
    navigate("/user") 
    return <></>
  }

  function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    const form = event.target.elements 
    signIn(form[0].value,form[1].value)

  }

  async function signIn(email, password){

    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        setError("User Logged in");
        localStorage.setItem("uid", user.uid)
        navigate("/user")
        // ...
    })
    .catch((error) => {
      if(error.code==="auth/user-not-found"){
        setError("User donot exist");
      }
      else if (error.code==="auth/wrong-password"){
        setError("Invalid password");
      }
      else{
        setError(error.code+"-"+error.message);
      }

      console.log(error.code);
      console.log(error.message);

      setLoading(false)
    });
}

  return (
    <div className="container">
      <Banner style={{marginBottom: '3rem'}} title="Roadside Asssistance"/>

      {error !== "" && <div className="error">{error}</div>}
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
              <Button disabled={loading} className="w-100 mt-3" type="submit">
                Log In
              </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-pass">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-4">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      <div className="w-100 text-center mt-4">
        Need an account as a service provider? <Link to="/serviceSignUp">Sign Up</Link>
      </div>

    </div>
  );
}

export default SignIn;