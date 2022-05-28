import React, { useState, useEffect } from "react"
import './UserMain.css';
import IMAGES from "../graphics";
import { Card, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import {db} from '../components/firebase'

const UserMain = () => {

  const [userData, setUserData] = useState(null);

  useEffect(async ()=>{
    const docRef = doc(db, "users", localStorage.getItem("uid"));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserData(docSnap.data());
      console.log("Document data:", docSnap.data());
    } else {
      console.log("Error 404 - Sorry somthing went wrong");
    }
  },[])

  function signout(){
    localStorage.clear()
    window.location.href = "/signin"
  }

  if(localStorage.getItem("uid") === null){
    window.location.href = "/signin"
    return( <>Sorry you are not signed In</>)
  } else if (userData === null)
  {
    return( <>Loading user data ...</>)
  }

  return (
    <>
      <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>

          <Navbar.Brand>
            <div onClick={()=> window.location.href = "/"} style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <img className="logo" src={IMAGES.wrench} alt="logo"/>
              <span className="userpage-title">Roadside Asisstance</span>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
            <Nav className="nav-links">
              <span></span>
              <Nav.Link href="/user/services">Services</Nav.Link>
              <Nav.Link href="#location">Location</Nav.Link>
              <Nav.Link href="#available-person">Available Person</Nav.Link>
              <Nav.Link href="#payments">Payments</Nav.Link>
              <Nav.Link onClick={()=>signout()}>Signout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      
      <br/>
      <Card style={{backgroundColor: "#008f8a"}}>
        <Card.Body>
          <div className="userpage-avatar-container">
             <img src={IMAGES.gongYoo} alt="avatar" className="userpage-avatar"/>
             <br />
             <h3 style={{color: "white"}} >{userData.fName + " " + userData.lName}</h3>
           </div>
        </Card.Body>
       </Card>
       <Card>
         <Card.Body>
          <div className="userpage-detail-container">
            <h3>About you</h3>
            <p>Email: {userData.email}</p>
            <p>Contact: {userData.phone}</p>
            <p>Address: {userData.street+", "+userData.suburb+", "+userData.state}</p>
            <p>Membership status: {userData.member ? "Active" : "Expired"}</p>
            
            <br />
            <h3>Vehicles</h3>
            <p>Car 1</p>
            <p>Car 2</p>
          </div>
        </Card.Body>
      </Card>
    </>
  );

}

export default UserMain;