import React, { useState} from "react";
import './Services.css';
import Banner from "../pages/banner";
import { Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import {db} from '../components/firebase';
import {addDoc,collection } from "firebase/firestore"; 

var checkService = {
  fuel: false,
  tyre: false,
  towing: false,
  mech: false
}

const RequestService = () => {
  
  const [loading, setLoading] = useState(false)
  
  const [coords, setCoords] = useState(null)

  const [bill, setBill] = useState(30)

  const price = {
    fuel:20,
    tyre:45,
    towing: 55,
    mech: 100
  }

  
  function calcBill(type, checked){
    if(checked){
      checkService[type]=true;
      setBill(bill+price[type]); 
      
    }
    else{
      checkService[type]=false;
      setBill(bill-price[type]); 
      
    }
  }

  async function setData(form){

    let services = "";
    let descriptions;
    if(localStorage.getItem('member')==='true'){
      services = form[2].value;
      descriptions = form[3].value
    }
    else{
      services+=`total bill is ${bill} `
      descriptions = form[6].value

      if(checkService.fuel){
        services+="Fuel delivery "}

      if(checkService.tyre){
        services+= "Needs tyre replacement "}

      if(checkService.towing){
        services+= "Vehicle needs to be towed "}

      if(checkService.mech){
        services+= "Mechinical assistance required "}
      
      
    }

    console.log(services)

    await addDoc(collection(db, "requests"), {
        userName: localStorage.getItem("fName")+" "+localStorage.getItem("lName"),
        email: localStorage.getItem("email"),
        phone:localStorage.getItem("phone"),
        vMake: form[0].value,
        vModel: form[1].value,
        service: services,
        description: descriptions,
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
              {localStorage.getItem('member')==='true'?
                <Form.Group id="service">
                  <Form.Label>Service Required</Form.Label>
                  <Form.Control type="textarea" required/>
                </Form.Group>
                :
                <Form.Group id="service">
                  <Form.Label>Service Required</Form.Label>
                  <Form.Check type="checkbox" label="Fuel delievey" id="fuel" onChange={(e)=>calcBill("fuel",e.target.checked)}/>
                  <Form.Check type="checkbox" label="Towing" id="towing" onChange={(e)=>calcBill("towing",e.target.checked)}/>
                  <Form.Check type="checkbox" label="Tyre Replacement" id="tyre" onChange={(e)=>calcBill("tyre",e.target.checked)}/>
                  <Form.Check type="checkbox" label="Mechnical assiatance" id="mech" onChange={(e)=>calcBill("mech",e.target.checked)}/>
                  
                </Form.Group>
              }
              <br/>
              <Form.Group id="description">
                <Form.Label>Brief Description</Form.Label>
                <Form.Control type="textarea" required />
              </Form.Group>
              <br/>
              {localStorage.getItem('member')!=='true' && <p><Button variant="success">${bill}</Button>*$30 service charges are included</p>}
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