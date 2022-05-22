import './mainPage.css';
import IMAGES from '../graphics/index';
import Banner from '../components/header_banner/banner';
import { Link } from 'react-router-dom';

function mainPage (){

    

    return(
        <div>
            <div className="main_page">

                <div className='main_page_option'>
                    <img className='main_page_icon' src={IMAGES.userIcon} alt='user_icon'/>
                    <Link to="/login">
                        <button className='main_page_button'>User</button>
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

                <div className='main_page_option'>
                    <h3><i>Temporary Button</i></h3>
                    <Link to='/services'>
                        <button className="main_page_button">Services</button>
                    </Link>    
                </div>     

            </div>  
        </div>
          
    )
}

export default mainPage;