 import { initializeApp } from "firebase/app";
 import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAlLD9a4UdwMZaTW9EXI9K-D5y_S9ELrJw",
  authDomain: "nextapp-fa13b.firebaseapp.com",
  projectId: "nextapp-fa13b",
  storageBucket: "nextapp-fa13b.appspot.com",
  messagingSenderId: "379297769456",
  appId: "1:379297769456:web:aad6b183953eee1d7a9f35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export {DB};