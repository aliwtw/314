import "./userDetail.css";
import { Link } from "react-router-dom";
import {Navbar, Button, Form} from 'react-bootstrap';
import IMAGES from '../graphics';

function UserDetail()
{
	return(
		<div>
			<Navbar bg="dark" variant="dark">
			  <Navbar.Brand href="/service">
				<img src={IMAGES.logo} alt="companyLogo" className="companyLogo"/>{' '}
				<span> Roadside Assistance  </span>
			  </Navbar.Brand>
		  </Navbar>
			<div className="container">
				<Form>
					<Form.Group>
						<Form.Label>Driver Name </Form.Label>
						<span className="textResult">Example</span>
					</Form.Group>

				  <Form.Group>
					<Form.Label> Location</Form.Label>
					<span className="textResult">Example</span>
				  </Form.Group>
				  
				  <Form.Group>
					<Form.Label> Vehicle Model </Form.Label>
					<span className="textResult">Example</span>
				  </Form.Group>
				  
				  <Form.Group>
					<Form.Label> Service Requested </Form.Label>
					<span className="textResult">Example</span>
				  </Form.Group>
				  
				  <Form.Group>
					<Form.Label>Payment Option </Form.Label>
					<span className="textResult">Example</span>
				  </Form.Group>
				</Form>
				<Link to="/service/servicesAccept">
					<Button variant="primary" size="mg" className="margin">Accept Request</Button>
				</Link>
			</div>
		</div>
	)
}

export default UserDetail; 