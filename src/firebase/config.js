import  firebase  from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDeUMEpwlIHE3AC95eObIGTmc-XZtv14xY",
  authDomain: "olx-clone-react-a0bc4.firebaseapp.com",
  projectId: "olx-clone-react-a0bc4",
  storageBucket: "olx-clone-react-a0bc4.appspot.com",
  messagingSenderId: "408948582562",
  appId: "1:408948582562:web:ae602a993e07f3a7b54ffb",
  measurementId: "G-EJS1ZCSQ03"
};


export default firebase.initializeApp(firebaseConfig);