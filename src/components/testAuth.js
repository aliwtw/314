import config from './firebaseAuth';
import {initializeApp} from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

function Auth (){
    const [errorMessage, setError] = useState('');

    const app = initializeApp(config);
    const auth = getAuth(app);
    function newUser(email, password){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            setError(error.message);
            console.log(errorCode);
            console.log(errorMessage);
            // ..
        });
    }
    

    return(
        <div>
            <h1 onClick={()=>{newUser('ali@uow.com','123')}}>Test Sign up</h1>
            <h1>{errorMessage}</h1>
        </div>
    )
}

export default Auth;