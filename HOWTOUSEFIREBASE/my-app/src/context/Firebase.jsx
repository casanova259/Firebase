import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";
// import { createContext, useContext } from "react";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAr8gNvh7gQLz4v8FSDUZIGBcTVNDhZuEQ",
    authDomain: "app-f20f7.firebaseapp.com",
    databaseURL: "https://app-f20f7-default-rtdb.firebaseio.com",
    projectId: "app-f20f7",
    storageBucket: "app-f20f7.firebasestorage.app",
    messagingSenderId: "166027906008",
    appId: "1:166027906008:web:453e5211cca6a9332ac0ad",
    // databaseURL: "https://app-f20f7-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const Firebaseapp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(Firebaseapp);
const database = getDatabase(Firebaseapp);
const FirebaseContext = createContext(null);

//first too interact with realtime db we have to make an instance of the database



//making a custom hook to call the fucntions in the provider
export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = (props) => {
    const signUpUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(FirebaseAuth,email, password);
    }

    const putData = (key, data) => set(ref(database, key), data);
    return (<FirebaseContext.Provider
    value={{signUpUserWithEmailAndPassword,putData}}>
        {props.children}
    </FirebaseContext.Provider>);
}