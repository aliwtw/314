import './App.css';
import IMAGES from './graphics/index';
import Banner from './pages/banner';
import { Link } from "react-router-dom";

function App() {


  return (
    <div className="main_page">
      <Banner title="Roadside Assistance"/>
      <div className='main_page_option'>
        <img className='main_page_icon' src={IMAGES.mechanicIcon} alt='mechanic_icon'/>
        <Link to="/signin">
              <button className="main_page_button">Sign In</button>
        </Link>
      </div>
      <div className='main_page_option'>
          <img className='main_page_icon' src={IMAGES.onDemandIcon} alt='on_demand_icon'/>
          <Link to="user/available-provider">
          <button className="main_page_button">Realtime Providers</button>
		      </Link>
      </div> 
    </div>
  );
}

export default App;