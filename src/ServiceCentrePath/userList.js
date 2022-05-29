import React, { useEffect, useState } from "react";
//import './AvailableCentre.css';
import './ServiceMain.css';
import { Card, Navbar, Nav, Button} from "react-bootstrap";
import IMAGES from "../graphics";
import { collection,getDocs, query, updateDoc, doc} from "firebase/firestore"; 
import {db} from '../components/firebase';

const AvailableRequests = () => {

  const [data,setData] = useState([])
  let dataArray = []

  useEffect(async()=>{
    const search = query(collection(db, "requests"));
    const newData = await getDocs(search);
    
    await newData.forEach((docu) => {
        console.log(docu.id, " => ", docu.data());
        dataArray = [...dataArray,docu];
    });

    setData(dataArray);
    console.log(dataArray);
  },[])

  function signout(){
    localStorage.clear()
    window.location.href = "/signin"
  }

  if(data===[]){
    return<></>
  }



  return(
    <>
    <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <div onClick={()=> window.location.href = "/"} style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <img className="logo" src={IMAGES.logo} alt="logo"/>
            <span className="userpage-title">Roadside Asisstance</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav className="nav-links">
            <Nav.Link href="/service">Profile</Nav.Link>
            <Nav.Link onClick={()=>signout()}>Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    <br />
    <div className="avai-container">
      {data.map(docu => {
		const request = docu.data()
        if(!request.accepted)
        return(
          <>
            <Request 
            name={request.userName}
			service={request.service} 
			vehicle={request.vModel+ " " + request.vMake}
			description={request.description}
            phone={request.phone}
			lat={request.lat}
			lon= {request.lon}
			docId = {docu.id}
            />
            <br /> 
          </>
        )
      })
    }
    </div>
    </>
  );
}

const Request = (props) => {

  const { name, service, vehicle, description, phone, lat, lon, docId } = props;

  function getLocation(lat,lon)
  {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

	function openLoaction(pos)
	{
		const coords = pos.coords
		window.open(`https://www.google.com/maps/dir/?api=1&origin=${coords.latitude}%2C${coords.longitude}&destination=${lat}%2C${lon}`)
	}

    navigator.geolocation.getCurrentPosition(openLoaction, (err)=>{console.log(err)}, options);

	
  }

  async function accept(value)
	{
		await updateDoc(doc(db, "requests", value), {accepted: true, provider: localStorage.getItem('uid')});
		window.location.reload();
	}
  

  return (
    <Card style={{ width: '18rem', border: `3px solid green`}}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
		  Service required: {service}
		  <br/>
		  Vehicle: {vehicle}
		  <br/>
		  description: {description}
		  <br/>
		  Phone no. {phone}
          <br/>
		  <Button variant="outline-primary" onClick={()=>getLocation(lat,lon)}>Get Directions</Button>
		  <br/>
		  <br/>
		  <Button variant="outline-success" onClick={()=>{getLocation(lat,lon);accept(docId)}}>Accept</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );

}

export default AvailableRequests;

