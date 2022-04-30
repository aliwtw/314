import './loginPage.css';
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <div className="login_container">
      <div className="login">
        <h3>Sign In</h3>
        <h6>Hi there! Nice to see you again</h6>

        <h5>Email</h5>
        <input type="text" placeholder='your_email@gmail.com'/>
        <h5>Password</h5>
        <input type="text" placeholder='your_password'/>
      </div>
      
      <Link to='/forgot-password'>
        <h6>Forgot Password?</h6>
      </Link>
    
      <Link to='/sign-up'>
        <h4>Sign Up</h4>
      </Link>

    </div>
  )
}

export default Login;