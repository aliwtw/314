import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import './AvailableCentre.css';
import './UserMain.css';
import { Card, Navbar, Nav, Badge} from "react-bootstrap";
import IMAGES from "../graphics";
import { collection,getDocs, query} from "firebase/firestore"; 
import {db} from '../components/firebase';

const AvailableCentre = () => {

  const navigate = useNavigate()
  const [data,setData] = useState([])
  let dataArray = []

  useEffect(()=>{

    async function fetch(){
      const search = query(collection(db, "providers"));
      const newData = await getDocs(search);
      
      newData.forEach((doc) => {
          //console.log(doc.id, " => ", doc.data());
          dataArray = [...dataArray,doc.data()];
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
          <div onClick={()=> window.location.href = "/"} style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <img className="logo" src={IMAGES.logo} alt="logo"/>
            <span className="userpage-title">Roadside Asisstance</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav className="nav-links">
            <Nav.Link href="/user/services">Services</Nav.Link>
            <Nav.Link href="/user/available-provider">Available Providers</Nav.Link>
            <Nav.Link href="/user/payments">Payments</Nav.Link>
            <Nav.Link onClick={()=>signout()}>Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    <br />
    <div className="avai-container">
      {data.map(provider => {
        if(provider.available)
          return(
            <>
              <Provider 
              name={provider.fName +" "+ provider.lName} 
              available={provider.available}
              phone={provider.phone}
              company= {provider.company}
              address={provider.unit +" "+provider.street +" "+provider.suburb +" "+provider.state}
              />
              <br /> 
            </>
          )
        })
      }

      {data.map(provider => {
        if(!provider.available)
        return(
          <>
            <Provider 
            name={provider.fName +" "+ provider.lName} 
            available={provider.available}
            phone={provider.phone}
            company= {provider.company}
            address={provider.unit +" "+provider.street +" "+provider.suburb +" "+provider.state}
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

const Provider = (props) => {

  const { name, available, phone, company, address } = props;
  const borderColor = available ? 'green' : 'red';

  return (
    <Card style={{ width: '18rem', border: `3px solid ${borderColor}`}}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {company}
          <br/>
        <Badge bg={available ? 'success' : 'danger'}>{available ? 'Available' : 'Not Available'}</Badge>
          <br/> 
          phone: {phone}
          <br/><br/>
          Address: {address}
        </Card.Text>
      </Card.Body>
    </Card>
  );

}

export default AvailableCentre;

