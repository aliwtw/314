import {auth, db} from './firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 


function Auth (){
    const [errorMessage, setError] = useState('');

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
    
    async function dbase(){
        try {
            const docRef = await addDoc(collection(db, "users"), {
              first: "Ali",
              last: "WTW",
              born: 2002
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        console.log(db);

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