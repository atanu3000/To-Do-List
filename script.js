let addTask = document.querySelector('#addTask');
let showTask = document.querySelector('#showTask');
let add = document.querySelector('#add');
let success = document.querySelector('#success');

success.style.display = 'none';

// show task is by default display none
// showTask.style.display = 'none';

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import {
    getDatabase,
    ref,
    push,
    set,
  } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgUZM0cszZ3EMHQKc8RPCy4rOsa1p2J4g",
  authDomain: "to-do-list-331d5.firebaseapp.com",
  databaseURL: "https://to-do-list-331d5-default-rtdb.firebaseio.com",
  projectId: "to-do-list-331d5",
  storageBucket: "to-do-list-331d5.appspot.com",
  messagingSenderId: "635654046870",
  appId: "1:635654046870:web:d913d8a90280ece63eaeb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const db = getDatabase(app);

addTask.addEventListener("submit", (e) => {
    e.preventDefault();
    let task = document.querySelector('#task').value;
    console.log(task);
    sendMessage(task);

    addTask.reset();
});

function sendMessage(task) {
    const allTask = ref(db, "allTask");
    const newTask = push(allTask);
    set(newTask, {
        task: task,
    })
    .then(() => {
      success.style.display = 'block';
      setTimeout(() => {
        success.style.display = 'none';
      }, 4000);
    })
    .catch((error) => {
      alert("There is an error " + error);
    })
}
