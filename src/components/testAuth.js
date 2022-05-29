import {auth, db} from './firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { useState } from 'react';
import { collection, addDoc, set, setDoc,doc, getDocs, query, where } from "firebase/firestore"; 

let user;

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
    
    async function dbase(){
        const q = query(collection(db, "providers"));
        const x = await getDocs(q);
        console.log(x);
        x.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });

    }


    return(
        <div>
            <button onClick={()=>{newUser('ali@uow.com','123456')}}>Test Sign up</button>
            <button onClick={()=>{signIn('ali@uow.com','123456')}}>Test Sign in</button>
            <button onClick={()=>{dbase()}}>Test DB</button>
            <input type="file" accept="image/png, image/jpeg"></input>
            <br/>
            <h1>{errorMessage}</h1>
        </div>
    )
}

export default Auth;