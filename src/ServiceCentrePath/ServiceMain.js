import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import './ServiceMain.css';
import IMAGES from "../graphics";
import { Card, Nav, Navbar, ButtonGroup, ToggleButton } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import {db} from '../components/firebase'

const ServiceMain = () => {

  const navigate = useNavigate()
  const [providerData, setProviderData] = useState(null);
  const [Available, setAvailable] = useState(true);

  useEffect(async ()=>{
    const docRef = doc(db, "providers", localStorage.getItem("uid"));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setProviderData(docSnap.data());
      setAvailable(docSnap.data().available)
      console.log("Document data:", docSnap.data());
    } else {
      console.log("Error 404 - cannot find the user");
    }
  },[])

  function signout(){
    localStorage.clear()
    navigate("/signin")
  }

  async function changeAvailable(value)
  {
    if (value!==Available){
    setAvailable("loading");
    await updateDoc(doc(db, "providers", localStorage.getItem("uid")), {available: value});
    setAvailable(value);
    }
  }

  if(localStorage.getItem("uid") === null){
    navigate("/signin")
    return( <>Sorry you are not signed In</>)
  } else if (providerData === null)
  {
    return( <>Loading user data ...</>)
  }

  return (
    <>
      <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>

          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img className="logo" src={IMAGES.logo} alt="logo"/>
              <span className="userpage-title">Roadside Assistance</span>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
            <Nav className="nav-links">
              <span></span>
              <Nav.Link href="/service/userList">Available Request</Nav.Link>
              <Nav.Link href="/service/jobs">Jobs</Nav.Link>
              <Nav.Link onClick={()=>signout()}>Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

      <Card style={{backgroundColor: "#008f8a"}}>
        <Card.Body>
          <div className="providerpage-avatar-container">
             <img src={IMAGES.userProfile} alt="avatar" className="providerpage-avatar"/>
             <br />
             <h3 style={{color: "white"}} >{providerData.company}</h3>
           </div>
        </Card.Body>
       </Card>
       <Card>
         <Card.Body>
          <div className="userpage-detail-container">
            <h3>About you</h3>
            <p>Name: {providerData.fName + " " + providerData.lName}</p>
            <p>Email: {providerData.email}</p>
            <p>Contact: {providerData.phone}</p>
            <p>Address: {providerData.street+", "+providerData.suburb+", "+providerData.state}</p>
            <br />
          </div>
          {Available==="loading"?
            <ToggleButton>Loading...</ToggleButton>
            :
            <ButtonGroup>
              <ToggleButton
                type="radio"
                value='Available'
                checked={Available}
                variant='outline-success'
                onClick={()=>changeAvailable(true)}
              >
                Available
              </ToggleButton>

              <ToggleButton
                type="radio"
                value='Available'
                checked={!Available}
                variant='outline-danger'
                onClick={()=>changeAvailable(false)}
              >
                Not Available
              </ToggleButton>
            </ButtonGroup>
          }
        </Card.Body>
      </Card>
    </>
  );

}

export default ServiceMain;