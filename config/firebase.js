import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBgeRyJWKQxObwq26Y5PMbzncXkVCqmFN4",
    authDomain: "dbprojreact.firebaseapp.com",
    projectId: "dbprojreact",
    storageBucket: "dbprojreact.appspot.com",
    messagingSenderId: "463355888784",
    appId: "1:463355888784:web:272cd1a3654f54b9050415"
  };
  

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;