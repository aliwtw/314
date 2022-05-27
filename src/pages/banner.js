import './banner.css';
import IMAGES from '../graphics';


const Banner = (props) => {
  
  const { title } = props;

  const imgStyle = {
    width: '3rem',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem'
  }

  return (

    <div className="index">
      <img style={imgStyle} src={IMAGES.logo} alt="logo"/>
      <span className='title'>
        {title}
      </span>
      <img style={imgStyle} src={IMAGES.logo} alt="logo"/>
    </div>
    
  );
}

export default Banner;