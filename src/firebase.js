import firebase from "firebase/app";
import "firebase/auth"; // for authorization
import "firebase/database"; // To make use of realtime DB
import "firebase/storage"; // Allow us to store media-files
//import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyBbQe1h7xwC5IDDBm6aztqPKk8QQpvKQyg",
  authDomain: "react-slack-clone-14893.firebaseapp.com",
  databaseURL: "https://react-slack-clone-14893.firebaseio.com",
  projectId: "react-slack-clone-14893",
  storageBucket: "react-slack-clone-14893.appspot.com",
  messagingSenderId: "874342767132",
  appId: "1:874342767132:web:5e1c8bf9ee842fdd839dd9",
  measurementId: "G-MWWXCXCB0B",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase;
