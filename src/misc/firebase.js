import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
const config = {
    apiKey: "AIzaSyDvf4x0KM_GVJ4NUoy_TeeG8aM2rAuKdYk",
    authDomain: "chat-web-app-29ed8.firebaseapp.com",
    databaseURL: "https://chat-web-app-29ed8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chat-web-app-29ed8",
    storageBucket: "chat-web-app-29ed8.appspot.com",
    messagingSenderId: "931939229772",
    appId: "1:931939229772:web:d3a7ba873b04f4340054e9"
};

const app = firebase.initializeApp(config)
export const auth = app.auth()
export const database = app.database()