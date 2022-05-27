import './notify.css';
import { Link } from "react-router-dom";

export default function AcceptRequest ()  {
	return(
		<div className="notify_container">
			<div className="notify_boxText">
				Notify the Driver
			</div>
			<Link to="/service/servicesAccept/servicesNotify">
				<button className="accept" > Accept and notify the <br/> customer time top <br/> reach </button>	
			</Link>
			<Link to="/service">
				<button className="decline">Go Back and choose <br/> another Request</button>
			</Link>
		</div>
	);
}

