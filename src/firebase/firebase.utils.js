import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyBW7UCCFWyCDZKnoEImo53YVI3z0a2ZSKc",
    authDomain: "royal-clothing.firebaseapp.com",
    databaseURL: "https://royal-clothing.firebaseio.com",
    projectId: "royal-clothing",
    storageBucket: "",
    messagingSenderId: "33411458075",
    appId: "1:33411458075:web:99d9f23963124ce5"
  });

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;

