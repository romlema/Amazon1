import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwwjGlsRC0WufmJ6R4tr-qFSEUJmTd7hg",
  authDomain: "clone-ea3d1.firebaseapp.com",
  projectId: "clone-ea3d1",
  storageBucket: "clone-ea3d1.appspot.com",
  messagingSenderId: "1051045916178",
  appId: "1:1051045916178:web:9b4cf26d6c2db9534f32cb",
  measurementId: "G-JD9BER7Z4V"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };