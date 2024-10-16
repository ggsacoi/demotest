// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA43D6CPzdkzfvm-yNmLlTeafMKE_AUdgw",
  authDomain: "x-pathway-421918.firebaseapp.com",
  projectId: "x-pathway-421918",
  storageBucket: "x-pathway-421918.appspot.com",
  messagingSenderId: "16124353370",
  appId: "1:16124353370:web:58ed21d55ee906f627f163",
  measurementId: "G-2HLPMNV82B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dataBase = getDatabase(app);
const auth = getAuth();


document.addEventListener('DOMContentLoaded', () => {
var submit = document.getElementById("envoi");

submit.addEventListener('click', async (e) => {
  e.preventDefault();

var password = document.getElementById("loginpass").value;
var email = document.getElementById("lemail").value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCrendential) => {
      const user = userCrendential.user;
      alert('user created!')
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert('errorMessage');
    });
});
});