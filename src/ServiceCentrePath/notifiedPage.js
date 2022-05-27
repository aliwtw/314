import './notifiedPage.css';
import IMAGES from "../graphics";
import { Link } from "react-router-dom";

function notified() {
	
	return (
		<div className="container">
			<img className="tickImage" src={IMAGES.tickIcon} alt='tickImage'/>
			<div className="boxText">
				<p>	The customer has been <br/> notified</p>
			</div>
			<Link to="/service">
				<button>Return Home</button>
			</Link>
			
		</div>
	)
}

export default notified;