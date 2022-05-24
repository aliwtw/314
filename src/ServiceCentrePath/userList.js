import {Card, CardGroup, ListGroup,Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import IMAGES from '../graphics';
import "./userList.css";

function UserList ()
{
	return(
	<>
	  <Navbar bg="dark" variant="dark">
		  <Navbar.Brand href="/service">
			<img src={IMAGES.wrench} alt="companyLogo" className="companyLogo"/>{' '}
			<span> Manage Customers </span>
		  </Navbar.Brand>
	  </Navbar>
	  
	  <div className="searchBar">
		<input type="search" placeholder="Search..."/>
	  </div>
		
	<Card className="card">
	  <ListGroup variant="flush">
		<Link to="services">
			<ListGroup.Item>user 1</ListGroup.Item>
			<ListGroup.Item>user 2</ListGroup.Item>
			<ListGroup.Item>user 3</ListGroup.Item>
		<Card.Header></Card.Header>
			<ListGroup.Item>user 4</ListGroup.Item>
			<ListGroup.Item>user 5</ListGroup.Item>
		<Card.Header></Card.Header>
		<ListGroup.Item>user 5</ListGroup.Item>
		</Link>
	  </ListGroup>
	</Card>
	</>
);
}

export default UserList;