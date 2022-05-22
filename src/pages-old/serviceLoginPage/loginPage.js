import './loginPage.css';
import { Link } from 'react-router-dom';
import {useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./components/testFirebase";

const Login = () => {
	
const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");

const loginPage = async () => {
	try{
		const user = await signInWithEmailAndPassword(auth, email, password); 
		console.log(user);
	} catch(e)
	{
		console.log(e.message);
	}
};

  return (
    <div className="login_container">
      <div className="login">
        <h3>Sign In</h3>
        <h6>Hi there! Nice to see you again</h6>

        <h5>Email</h5>
        <input type="text" placeholder='your_email@gmail.com'
		onChange ={(e) => {
			setLoginEmail(e.target.value);
		}}
		/>
        <h5>Password</h5>
        <input type="text" placeholder='your_password'
		onChange ={(e) => {
			setLoginPassword(e.target.value);
		}}
		/>
		<button onClick={loginPage}> Login </button>
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