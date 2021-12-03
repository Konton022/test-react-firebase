import "./styles.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDxnqdfTPn0GaW5fBkRdSTnRy6jhJ7RRdw",

  authDomain: "test-reactapp-firebase.firebaseapp.com",

  projectId: "test-reactapp-firebase",
});

const db = getFirestore();

export default function App() {
  async function fetchFire() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
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
