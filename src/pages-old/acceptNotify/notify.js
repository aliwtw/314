import './notify.css';

export default function AcceptRequest ()  {
	return(
		<div className="notify_container">
			<div className="notify_boxText">
				Notify the Driver
			</div>
			<button className="accept" > Accept and notify the <br/> customer time top <br/> reach </button>	
			
			<button className="decline">Go Back and choose <br/> another Request</button>
		</div>
	);
}

