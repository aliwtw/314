import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import './ServiceMain.css';
import { Card, Navbar, Nav, Button, Badge} from "react-bootstrap";
import IMAGES from "../graphics";
import { collection,getDocs, query, updateDoc, doc, where} from "firebase/firestore"; 
import {db} from '../components/firebase';

const MyJobs = () => {

  const navigate = useNavigate()
  const [data,setData] = useState([])
  let dataArray = []

  useEffect(()=>{
    async function fetch(){
      const search = query(collection(db, "requests"),where("provider", "==", localStorage.getItem("uid")));
      const newData = await getDocs(search);
      
      await newData.forEach((docu) => {
          console.log(docu.id, " => ", docu.data());
          dataArray = [...dataArray,docu];
      });

      setData(dataArray);
      console.log(dataArray);
    }
    fetch()
  },[])

  function signout(){
    localStorage.clear()
    navigate("/signin")
  }

  if(data===[]){
    return<></>
  }



  return(
    <>
    <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <div style={{ textDecoration: 'none', cursor: 'default' }}>
            <img className="logo" src={IMAGES.logo} alt="logo"/>
            <span className="userpage-title">Roadside Asisstance</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav className="nav-links">
            <Nav.Link onClick={()=>navigate("/service/userList")}>Available Request</Nav.Link>
            <Nav.Link onClick={()=>navigate("/service")}>Profile</Nav.Link>
            <Nav.Link onClick={()=>signout()}>Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    <br />
    <div className="avai-container">
      {data.map(docu => {
		const request = docu.data()
        if(request.accepted && !request.done)
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
            isDone={request.done}
            />
            <br /> 
          </>
        )
      })
    }
    {data.map(docu => {
		const request = docu.data()
        if(request.accepted && request.done)
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
            isDone={request.done}
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

  const { name, service, vehicle, description, phone, lat, lon, docId, isDone } = props;

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

    async function done(value)
    {
        await updateDoc(doc(db, "requests", value), {done: true});
        window.location.reload();
    }

    async function cancel(value)
	{
		await updateDoc(doc(db, "requests", value), {accepted: false, provider: null});
		window.location.reload();
	}

    const bColor = isDone? "blue": "green"

  return (
    <Card style={{ width: '18rem', border: `3px solid ${bColor}`}}>
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
            {isDone?

                <Badge bg="success">Completed</Badge>

            :
                <>
                <Button variant="outline-primary" onClick={()=>getLocation(lat,lon)}>Get Directions</Button>
                <br/>
                <br/>
                <Button variant="outline-success" onClick={()=>{done(docId)}}>Done!</Button>
                <br/>
                <br/>
                <Button variant="outline-danger" onClick={()=>{cancel(docId)}}>Cancel</Button>
                </>
            }
        </Card.Text>
      </Card.Body>
    </Card>
  );

}

export default MyJobs;

