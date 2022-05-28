import React, { useState } from "react"
import './signin.css';
import { Form, Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Banner from "../pages/banner";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth, db} from '../components/firebase';
import {setDoc,doc } from "firebase/firestore"; 



const SignUp = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  if (localStorage.getItem("uid") !== null){
    window.location.href = "/service" 
    return <></>
  }

  const handleSubmit = (event) => {
    event.preventDefault()  
    setLoading(true) 
    const form = event.target.elements 
    console.log(form)

    if (form[9].value===form[10].value){
      newUser(form)
    }else{
      setError("Passwords do not match")
      setLoading(false)
    }
  }

  async function newUser(form){
      await createUserWithEmailAndPassword(auth, form[8].value, form[9].value)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setData(user, form);
          //console.log(user);
          setError("New user created");
      })
      .catch((error) => {
          
        if(error.code==="auth/weak-password"){
          setError("Weak password");
        }
        else if (error.code==="auth/email-already-in-use"){
          setError("This email is already in use");
        }
        else{
          setError(error.code+"-"+error.message);
        }
        setLoading(false)
        //console.log(error.code);
        //console.log(error.message);
      });
    }

    async function setData(user, form){
      await setDoc(doc(db, "providers", user.uid), {
          fName: form[0].value,
          lName: form[1].value,
          phone: form[2].value,
          company: form[3].value,
          street: form[4].value,
          unit: form[5].value,
          state: form[6].value,
          suburb: form[7].value,
          email: form[8].value,
          cert: form[11].value
        });
        console.log("DB done")
        localStorage.setItem("uid", user.uid)
        window.location.href = "/service" 
      }

  return (
    <div className="container">
      <Banner style={{margin: "auto", marginBottom: '3rem'}} title="Roadside Assistance"/>
      {error !== "" && <div className="error">{error}</div>}
      <Card style={{ margin: '0' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group id="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group id="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" required />
            </Form.Group>
            <Form.Group id="company">
              <Form.Label>Company name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group id="street">
              <Form.Label>Street</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group id="unit">
              <Form.Label>Unit</Form.Label>
              <Form.Control type="unit" placeholder="Apartment/studio/floor"/>
            </Form.Group>
            <Form.Group id="state">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="" required>
                <option value="">--Select State--</option>
                <option value="NSW">NSW</option>
                <option value="QLD">QLD</option>
                <option value="SA">SA</option>
                <option value="VIC">VIC</option>
                <option value="TAS">TAS</option>
                <option value="ACT">ACT</option>
                <option value="NT">NT</option>
                <option value="WA">WA</option>
              </Form.Select>
            </Form.Group>
            <Form.Group id="suburb">
              <Form.Label>Suburb</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
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
            <Form.Group controlId="cert" className="mb-3">
              <Form.Label>Upload Certificate</Form.Label>
              <Form.Control type="file" accept="application/pdf, image/jpg, image/png" required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-4">
        Already have an account? <Link to="/serviceSignIn">Sign In</Link>
      </div>
    </div>
  );
}

export default SignUp;