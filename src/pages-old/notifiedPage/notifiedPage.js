import './notifiedPage.css';
import IMAGES from '../graphics/index';

const notified = () => {
	
	return (
		<div className="container">
			<img className="tickImage" src={IMAGES.tickIcon} alt='tickImage'/>
			<div className="boxText">
				The customer has been <br/> notified
			</div>
			
		</div>
	)
}

export default notified;