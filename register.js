import{auth,createUserWithEmailAndPassword}from "./firebase.js"
const register = () =>{
  const email = document.getElementById("email");
  const password = document.getElementById("password");

createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user--->", user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("errorMessage", errorMessage)
  });
}
let signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener("click", register)


