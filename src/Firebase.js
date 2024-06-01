import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA_5t8W6Vcu5DJ2cDhnOfmWucb1giQh5cI",
  authDomain: "helpinghand-a701c.firebaseapp.com",
  projectId: "helpinghand-a701c",
  storageBucket: "helpinghand-a701c.appspot.com",
  messagingSenderId: "975007856175",
  appId: "1:975007856175:web:2041aee0322cf7384ab8da",
  measurementId: "G-V9PW118MYS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {  db  };