import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAzdVLPD2ZQVpnDu_0hTV4GDOW99QLkMpY",
  authDomain: "fake-23826.firebaseapp.com",
  projectId: "fake-23826",
  storageBucket: "fake-23826.appspot.com",
  messagingSenderId: "1007029746871",
  appId: "1:1007029746871:web:440a34554a98a484d1e132",
  measurementId: "G-DVK8YRS1JT",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
