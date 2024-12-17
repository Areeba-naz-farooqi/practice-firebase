// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
// import{getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,GoogleAuthProvider,provider,signInWithPopup } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';

// const firebaseConfig = {
//   apiKey: "AIzaSyDv_vhri_0UQQ8sjgiI9I3VB-gJ7gMcf00",
//   authDomain: "fir-authentication-a65e6.firebaseapp.com",
//   projectId: "fir-authentication-a65e6",
//   storageBucket: "fir-authentication-a65e6.firebasestorage.app",
//   messagingSenderId: "58567610742",
//   appId: "1:58567610742:web:35c2824c0bb411af876a57"
// };

// const app = initializeApp(firebaseConfig);
// export{getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,GoogleAuthProvider,provider,signInWithPopup }





import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged,sendEmailVerification ,updateProfile, signOut ,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";




const firebaseConfig = {
  apiKey: "AIzaSyDoP4GoVVcp-95RZRH1_UMZplXeQVzwDQU",
  authDomain: "fir-8b510.firebaseapp.com",
  projectId: "fir-8b510",
  storageBucket: "fir-8b510.firebasestorage.app",
  messagingSenderId: "580432939936",
  appId: "1:580432939936:web:68ecdf001db31d6f7332c5",
  measurementId: "G-D0ZX6TQ74K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged,sendEmailVerification,updateProfile, signOut,GoogleAuthProvider,provider,signInWithPopup }
 