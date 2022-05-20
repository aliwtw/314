import "./userDetail.css";

function UserDetail()
{
	return(
		<div className="container">
				<text>Driver Name</text><br/>
				<text>Location</text><br/>
				<text>Vehicle Model</text><br/>
				<text>Service Requested</text><br/>
				<text>Payment Option</text>
				<button className="margin">Accept Request</button>
		</div>
	)
}

export default UserDetail; 