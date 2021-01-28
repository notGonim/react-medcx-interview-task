import firebase from "firebase"



const firebaseConfig = {
    apiKey: "AIzaSyDEV0PmqyQ5rzkAiFk3R-VCTqhYxOGFNLg",
    authDomain: "react-task-medicx.firebaseapp.com",
    projectId: "react-task-medicx",
    storageBucket: "react-task-medicx.appspot.com",
    messagingSenderId: "55970449755",
    appId: "1:55970449755:web:e8a9d3227d5fad7cdc727e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebaseApp.firestore()





export { db, auth, provider }
