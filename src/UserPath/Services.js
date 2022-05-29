import React, { useState } from "react";
import './Services.css';
import Banner from "../pages/banner";
import { Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import {db} from '../components/firebase';
import {addDoc,collection } from "firebase/firestore"; 


const RequestService = () => {
  
  const [loading, setLoading] = useState(false)
  
  const [coords, setCoords] = useState(null);

  async function setData(form){
    await addDoc(collection(db, "requests"), {
        userName: localStorage.getItem("fName")+" "+localStorage.getItem("lName"),
        email: localStorage.getItem("email"),
        phone:localStorage.getItem("phone"),
        vMake: form[0].value,
        vModel: form[1].value,
        service: form[2].value,
        description: form[3].value,
        lat: coords.latitude,
        lon: coords.longitude,
        provider: null,
        accepted: false
      });
      console.log("DB done")
      window.location.href = "/user" 
    }

  const handleSubmit = (event) => {
    event.preventDefault()  
    const form = event.target.elements
    setLoading(true) 
    setData(form)
  }

  function getLocation()
  {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition((pos)=>{setCoords(pos.coords)}, geoError, options);
  }

  function geoError(err)
  {
    if(err.code===1){
      setCoords("403")
    }
    console.log(`ERROR(${err.code}): ${err.message}`)

  }

  getLocation()

  return (
    <div className="container">
      {coords==="403" &&
        <div className="geoError">
          <h3>Please allow location access, and press try again button to continue, Thanks</h3>
          <br/>
          <Button onClick={()=>getLocation()}>Try again</Button>

        </div>
      }
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
              <Form.Group id="service">
                <Form.Label>Service Required</Form.Label>
                <Form.Control type="textarea" required/>
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
          <Button>
            <span>
              Go Back
            </span>
          </Button>
        </Link>
      </div>
  );
}

export default RequestService;