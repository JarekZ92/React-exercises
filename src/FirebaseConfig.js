import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDCsc2eP8S6QxWpa3A-2UXkyRUIFYKqBDQ",
    authDomain: "react-exercises.firebaseapp.com",
    databaseURL: "https://react-exercises.firebaseio.com",
    projectId: "react-exercises",
    storageBucket: "react-exercises.appspot.com",
    messagingSenderId: "71458463538"
};

firebase.initializeApp(config);
