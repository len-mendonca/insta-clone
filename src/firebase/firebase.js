import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC1vfgBhEf-pwrbVDwQiCzZ55l3au_ETcI",
  authDomain: "insta-clone-e3d58.firebaseapp.com",
  projectId: "insta-clone-e3d58",
  storageBucket: "insta-clone-e3d58.appspot.com",
  messagingSenderId: "343649412624",
  appId: "1:343649412624:web:246a5a9702e29b34330c95",
  measurementId: "G-1Q2HLY27H6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
