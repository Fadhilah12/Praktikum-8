import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyDNvvh7EG4MJjte6soFi71XIju4zDp0_Eo",
    authDomain: "praktikum-9-253e9.firebaseapp.com",
    databaseURL: "https://praktikum-9-253e9-default-rtdb.firebaseio.com",
    projectId: "praktikum-9-253e9",
    storageBucket: "praktikum-9-253e9.appspot.com",
    messagingSenderId: "488783929627",
    appId: "1:488783929627:web:37da663fc3d99c5a15b3be"
});

const FIREBASE = firebase;

export default FIREBASE;
