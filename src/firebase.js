import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHuNx85Yx8dPnuv8z5Q-eJn935L4hyN3I",
    authDomain: "clone-65fb0.firebaseapp.com",
    databaseURL: "https://clone-65fb0.firebaseio.com",
    projectId: "clone-65fb0",
    storageBucket: "clone-65fb0.appspot.com",
    messagingSenderId: "218536917876",
    appId: "1:218536917876:web:40f89e14618730281fca21",
    measurementId: "G-HHQD5DDE9S"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };