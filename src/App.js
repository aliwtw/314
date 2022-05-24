import './App.css';
import IMAGES from './graphics/index';
import Banner from './pages/banner';
import { Link } from "react-router-dom";

function App() {
  
  
  return (
    <div className="main_page">
      <Banner title="Roadside Assistance"/>
      <div className='main_page_option'>
        <img className='main_page_icon' src={IMAGES.userIcon} alt='user_icon'/>
          <Link to="/signin">
            <button className="main_page_button">User</button>
          </Link> 
      </div>
      <div className='main_page_option'>
          <img className='main_page_icon' src={IMAGES.mechanicIcon} alt='mechanic_icon'/>
          <button className="main_page_button">Registered Professional</button>
      </div>
      <div className='main_page_option'>
          <img className='main_page_icon' src={IMAGES.onDemandIcon} alt='on_demand_icon'/>
          <button className="main_page_button">On-Demand Service</button>
      </div> 

      <span style={{marginTop: '3rem'}}>
        More Options
      </span>
    </div>
  );
}

export default App;
