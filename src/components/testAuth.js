import config from './firebaseAuth';
import {initializeApp} from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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
            setError("New user created");
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
    

    function signIn(email, password){

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            setError("User Logged in");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            setError(error.message);
            console.log(errorCode);
            console.log(errorMessage);
        });
    }


    return(
        <div>
            <h1 onClick={()=>{newUser('ali@uow.com','123456')}}>Test Sign up</h1>
            <h1 onClick={()=>{signIn('ali@uow.com','123456')}}>Test Sign in</h1>
            <br/>
            <h1>{errorMessage}</h1>
        </div>
    )
}

export default Auth;