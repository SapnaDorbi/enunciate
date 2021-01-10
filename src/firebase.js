import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyAnIAoRRctttdOXXC0zBxYoIhQ6zuG_CEE",
    authDomain: "enunciate-c194f.firebaseapp.com",
    projectId: "enunciate-c194f",
    storageBucket: "enunciate-c194f.appspot.com",
    messagingSenderId: "940407938530",
    appId: "1:940407938530:web:e851a249556202e0fdadbb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;