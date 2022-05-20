import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD24p39qimHeZllTAo4u3rt5Uh0yDlAf4E",
    authDomain: "roadsideassistantservice.firebaseapp.com",
    projectId: "roadsideassistantservice",
    storageBucket: "roadsideassistantservice.appspot.com",
    messagingSenderId: "804345639458",
    appId: "1:804345639458:web:5d5562015fdd126faf907b",
    measurementId: "G-SSY3QVV6WQ"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
