
import { initializeApp } from 'firebase/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD_zgpQgaAF0xFOIfPKBWQKm-hy4SQk_GE",
  authDomain: "film-track.firebaseapp.com",
  databaseURL: "https://film-track-default-rtdb.firebaseio.com",
  projectId: "film-track",
  storageBucket: "film-track.appspot.com",
  messagingSenderId: "961139471812",
  appId: "1:961139471812:web:77c5354e97be681612a091",
  measurementId: "G-6NZ8HMH61G"
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();

export { firebaseApp, firestore };
