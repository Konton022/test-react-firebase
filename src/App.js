import "./styles.css";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDxnqdfTPn0GaW5fBkRdSTnRy6jhJ7RRdw",
  authDomain: "test-reactapp-firebase.firebaseapp.com",
  projectId: "test-reactapp-firebase",
});

const db = getFirestore();

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [lastName, setLastName] = useState("");
  async function fetchFire(event) {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name,
        lastName,
        age,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function getFire() {
    const querySnapshot = await getDocs(collection(db, "users"));
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
    return querySnapshot;
  }

  // useEffect(async () => {
  //   await getFire();
  // }, []);

  return (
    <div className="App" onSubmit={fetchFire}>
      <form>
        <input
          value={name}
          placeholder="enter name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          value={lastName}
          placeholder="enter last name"
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          value={age}
          placeholder="enter your age"
          onChange={(event) => setAge(event.target.value)}
        />
        <button type="submit">SEND</button>
      </form>
      <button onClick={getFire}> get DATA</button>
    </div>
  );
}
