import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const inisializeAthentication = ()=>{
    initializeApp(firebaseConfig);
}
export default inisializeAthentication;