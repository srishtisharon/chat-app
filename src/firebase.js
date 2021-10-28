import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDgwCnS1NWx25z566ch6z_9w5J74CROtlA",
    authDomain: "mumble-c6612.firebaseapp.com",
    projectId: "mumble-c6612",
    storageBucket: "mumble-c6612.appspot.com",
    messagingSenderId: "505698375449",
    appId: "1:505698375449:web:414b44ae1ad0d23daf5788"
  }).auth();