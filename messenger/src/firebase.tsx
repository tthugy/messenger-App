import React from 'react';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCfAZkUyUvQQ6NStXRWMFrbccwcVKIGa9M",
    authDomain: "messengerapp-124d6.firebaseapp.com",
    projectId: "messengerapp-124d6",
    storageBucket: "messengerapp-124d6.appspot.com",
    messagingSenderId: "1055227748440",
    appId: "1:1055227748440:web:d22bc7449186d6f4b0aa2d"
  };

const firebase = initializeApp(firebaseConfig);

export default firebase;