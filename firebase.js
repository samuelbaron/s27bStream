import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyByFGX8IobWUA-L6YkWmwj5WrZ5nmzeV74",
  authDomain: "s27bstream.firebaseapp.com",
  projectId: "s27bstream",
  appId: "1:613711702715:web:1ec0e90c077879aa4d979e",
  measurementId: "G-MGDR9SQRKK"
};
// Initialize Firebase
// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : '';
// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// export const auth = firebase.auth();
// export const db = firebase.firestore()
// var db = firebase.firestore()



export default firebase
