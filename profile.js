// import { getAuth, onAuthStateChanged ,sendEmailVerification,updateProfile , signOut } from "./firebase.js";

// const auth = getAuth();
// let profilepage= document.getElementById("profile-page")
// onAuthStateChanged(auth, (user) => {
//   if (user) {
   
//     const uid = user.uid;
//     console.log(user);
//     profilepage.innerHTML =`<div class="card mb-4 shadow-sm rounded-3">
//     <div class="card-body p-4">
//       <div class="d-flex align-items-center mb-3">
//         <img src="${user.photoURL}" alt="Profile Picture" class="rounded-circle border" width="100px" height="100px">
//         <div class="ms-3">
//           <h4 class="card-title mb-1">${user.displayName}</h4>
//           <p class="text-muted mb-0">${user.email}</p>
//         </div>
//       </div>
//       <hr>
//       <div class="row">
//         <div class="col-sm-3">
//           <p class="mb-1"><i class="bi bi-person-lines-fill"></i> Full Name</p>
//         </div>
//         <div class="col-sm-9">
//           <p class="text-muted mb-1">${user.displayName}</p>
//         </div>
//       </div>
//       <hr>
//       <div class="row">
//         <div class="col-sm-3">
//           <p class="mb-1"><i class="bi bi-envelope-fill"></i> Email</p>
//         </div>
//         <div class="col-sm-9">
//           <p class="text-muted mb-1">${user.email}</p>
//         </div>
//       </div>
//       <hr>
//       <div class="row">
//         <div class="col-sm-3">
//           <p class="mb-1"><i class="bi bi-telephone-fill"></i> Phone</p>
//         </div>
//         <div class="col-sm-9">
//           <p class="text-muted mb-1">(097) 234-5678</p>
//         </div>
//       </div>
//       <hr>
//       <div class="row">
//         <div class="col-sm-3">
//           <p class="mb-1"><i class="bi bi-phone-fill"></i> Mobile</p>
//         </div>
//         <div class="col-sm-9">
//           <p class="text-muted mb-1">(098) 765-4321</p>
//         </div>
//       </div>
//       <hr>
//       <div class="row">
//         <div class="col-sm-3">
//           <p class="mb-1"><i class="bi bi-geo-alt-fill"></i> Address</p>
//         </div>
//         <div class="col-sm-9">
//           <p class="text-muted mb-1">Bay Area, San Francisco, CA</p>
//         </div>
//       </div>
//       <hr>
//       <div class="row">
//         <div class="col-sm-3">
//           <p class="mb-1"><i class="bi bi-check-circle-fill"></i> Email Verified</p>
//         </div>
//         <div class="col-sm-9">
//           <p class="text-muted mb-1">${user.emailVerified ? "Yes" : "No"}</p>
//         </div>
//       </div>
//       <div class="mt-4 d-flex justify-content-between">
//         <button type="button" class="btn btn-primary" id="verifyEmail">Verify Email</button>
//         <button type="button" class="btn btn-warning" id="updateProfile">Update Profile</button>
//         <button type="button" class="btn btn-danger" id="signOut">Sign Out</button>
//       </div>
//     </div>
//   </div>`
  
    
//   } else {
//     // User is signed out
//     // ...
//   }
// });

// //verify email
// document.getElementById("verifyEmail").addEventListener("click", ()=>{
//   //send email verification request to server
  

// const auth = getAuth();
// sendEmailVerification(auth.currentUser)
//   .then(() => {
//     // Email verification sent!
//     // ...
//   });

//   //update profile
//   document.getElementById("updateProfile").addEventListener("click", ()=>{
//     //update profile on server
//     updateProfile(auth.currentUser, {
//       displayName: "Fizza",
//        photoURL: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-female-icon.png"
//     }).then(() => {
//      console.log("update");
     
//     }).catch((error) => {
//       console.log("error");
      
//     });
//   })

//   //signout
//   document.getElementById("signOut").addEventListener("click", ()=>{
//     //sign out user
//     signOut(auth).then(() => {
//       console.log("user has been signout");
      
//       }).catch((error) => {
//         console.log("Error");
        
//         });
//         });


// })

import { getAuth, onAuthStateChanged, sendEmailVerification, updateProfile, signOut } from "./firebase.js";

const auth = getAuth();
let profilePage = document.getElementById("profile-page");

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    profilePage.innerHTML = `
      <div class="card mb-4 shadow-sm rounded-3">
        <div class="card-body p-4">
          <div class="d-flex align-items-center mb-3">
            <img src="${user.photoURL || 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-female-icon.png'}" 
                 alt="Profile Picture" 
                 class="rounded-circle border" 
                 width="100px" 
                 height="100px">
            <div class="ms-3">
              <h4 class="card-title mb-1">${user.displayName || 'No Name Provided'}</h4>
              <p class="text-muted mb-0">${user.email}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3"><p class="mb-1"><i class="bi bi-person-lines-fill"></i> Full Name</p></div>
            <div class="col-sm-9"><p class="text-muted mb-1">${user.displayName || 'No Name Provided'}</p></div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3"><p class="mb-1"><i class="bi bi-envelope-fill"></i> Email</p></div>
            <div class="col-sm-9"><p class="text-muted mb-1">${user.email}</p></div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3"><p class="mb-1"><i class="bi bi-geo-alt-fill"></i> Address</p></div>
            <div class="col-sm-9"><p class="text-muted mb-1">Bay Area, San Francisco, CA</p></div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3"><p class="mb-1"><i class="bi bi-check-circle-fill"></i> Email Verified</p></div>
            <div class="col-sm-9"><p class="text-muted mb-1">${user.emailVerified ? "Yes" : "No"}</p></div>
          </div>
          <div class="mt-4 d-flex justify-content-between">
            <button type="button" class="btn btn-primary" id="verifyEmail">Verify Email</button>
            <button type="button" class="btn btn-warning" id="updateProfile">Update Profile</button>
            <button type="button" class="btn btn-danger" id="signOut">Sign Out</button>
          </div>
        </div>
      </div>
    `;

    // Add event listeners after the UI is rendered
    document.getElementById("verifyEmail").addEventListener("click", () => {
      sendEmailVerification(auth.currentUser)
        .then(() => {
          alert("Verification email sent!");
        })
        .catch((error) => {
          console.error("Error sending email verification:", error);
        });
    });

    document.getElementById("updateProfile").addEventListener("click", () => {
      updateProfile(auth.currentUser, {
        displayName: "Fizza",
        photoURL: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-female-icon.png"
      })
        .then(() => {
          alert("Profile updated successfully!");
          console.log("Profile updated");
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
        });
    });

    document.getElementById("signOut").addEventListener("click", () => {
      signOut(auth)
        .then(() => {
          alert("User signed out successfully.");
          console.log("User has been signed out");
        })
        .catch((error) => {
          console.error("Error signing out:", error);
        });
    });
  } else {
    // User is signed out
    profilePage.innerHTML = "<p class='text-center mt-5'>No user is currently signed in.</p>";
  }
});