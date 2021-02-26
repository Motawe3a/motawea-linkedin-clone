import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDsk_J7RTjqDu4n1V0NExXV01N9W_u5Ycw",
    authDomain: "linkedin-clone-f5c24.firebaseapp.com",
    projectId: "linkedin-clone-f5c24",
    storageBucket: "linkedin-clone-f5c24.appspot.com",
    messagingSenderId: "960217938813",
    appId: "1:960217938813:web:8cda6a03cea699e3be6a14"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth }