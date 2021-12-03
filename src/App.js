import "./styles.css";

// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA8kf1z-kiFhmcYibzaJPIXO-DX9cIP-xI",
  authDomain: "test-firestore-react.firebaseapp.com",
  projectId: "test-firestore-react",
  storageBucket: "test-firestore-react.appspot.com",
  messagingSenderId: "1065552438292",
  appId: "1:1065552438292:web:da800c8c557bfaa6b97301"
});

const db = getFirestore();

export default function App() {
  async function fetchFire() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="App">
      <button onClick={fetchFire}>SEND</button>
    </div>
  );
}
