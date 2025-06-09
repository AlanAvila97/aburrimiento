// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA21fzNt6GQCe4hWbAxMA0t9bc3ySvEiEo",
  authDomain: "tictoe-52f2f.firebaseapp.com",
  projectId: "tictoe-52f2f",
  storageBucket: "tictoe-52f2f.appspot.com",
  messagingSenderId: "646734221101",
  appId: "1:646734221101:web:d5f16e2a76683c61864da4",
  measurementId: "G-RFFYMYMRV6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveUser = (user, forma) =>
  addDoc(collection(db, "users"), { user, forma });
export const saveTask = (juego,forma, posicion) =>
  addDoc(collection(db, "jugadas"), { juego,forma, posicion });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "jugadas"), callback);
  export const onGetTurnos = (callback) =>
  onSnapshot(collection(db, "turno"), callback);
export const onGetUsers = (callback) =>
  onSnapshot(collection(db, "users"), callback);


/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "jugadas", id));

export const deleteTask2 = (juego) => deleteDoc(doc(db, "jugadas", juego));

export const getTask = (id) => getDoc(doc(db, "jugadas", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const updateTurno=(id,newFields)=>
  updateDoc(doc(db,"turno",id),newFields);

export const getTasks = () => getDocs(collection(db, "jugadas"));
