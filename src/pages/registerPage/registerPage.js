import { useState } from "react";
import { Link } from 'react-router-dom';
import './registerPage.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './components/testFirebase';

function Register() {
	
	const [registerEmail,setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	
	const registerPage = async () => {
		try{
			const user = await createUserWithEmailAndPassword(auth,email,password); 
			console.log(user);
		} catch(e)
		{
			console.log(e.message);
		}
	}
	
  return (
    <div className="login_container">
      <div className="login">
        <h3>Sign up</h3>
     
        <h5>Email</h5>
        <input type="text" placeholder='your_email@gmail.com'
		onChange = {(event) => {
			setRegisterEmail(event.target.value);
		}}
		/>
        <h5>Password</h5>
        <input type="text" placeholder='your_password'
		onChange = {(event) => {
			setRegisterPassword(event.target.value);
		}}
		/>
		
		<button onClick={registerPage}> Create service user </button>
      </div>
      
      <Link to='/login'>
        <h4>Login</h4>
      </Link>

    </div>
  )
}

export default Register;