import {auth, db} from './firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { useState } from 'react';
import { collection, addDoc, set, setDoc,doc } from "firebase/firestore"; 

let user;

function Auth (){
    const [errorMessage, setError] = useState('');

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
            user = userCredential.user;
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
    
    async function dbase(){doc(db, 'cities', 'BJ');
    await setDoc(doc(db, "users", user.uid), {
        fname: "Ali",
        lName: "Wtw",
        street: "Bank street",
        unit: "1",
        state: "NSW",
        suburb: "Wollongong",
        email: "ali@uow.edu.au"
      });
      console.log("DB done")

    }


    return(
        <div>
            <button onClick={()=>{newUser('ali@uow.com','123456')}}>Test Sign up</button>
            <button onClick={()=>{signIn('ali@uow.com','123456')}}>Test Sign in</button>
            <button onClick={()=>{dbase()}}>Test DB</button>
            <br/>
            <h1>{errorMessage}</h1>
        </div>
    )
}

export default Auth;