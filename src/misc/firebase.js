import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'
const config = {
    apiKey: "AIzaSyCsfp3ik-WA2n7yChYOG68Vp288MwwvMpI",
    authDomain: "chat-web-app-8f2e3.firebaseapp.com",
    databaseURL: "https://chat-web-app-8f2e3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chat-web-app-8f2e3",
    storageBucket: "chat-web-app-8f2e3.appspot.com",
    messagingSenderId: "674644670811",
    appId: "1:674644670811:web:11457a73d6f76c5f91427e"
};

const app = firebase.initializeApp(config)
export const auth = app.auth()
export const database = app.database()