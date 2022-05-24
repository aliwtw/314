import {signOut} from 'firebase/auth';
import {auth} from './components/testFirebase';
import { useState } from "react";

 function serviceHome()
 {
	
	const [user,setUser] = useState({});
	const logout = async () => {
		await signOut(auth);
	};
	 
	return(
		<div>
			<h3>Home Page</h3>
			{user?.email}
			<button onClick={logout}>Log out </button>
		</div>
	);
 }
 
 export default serviceHome;