import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  GoogleAuthProvider,
  connectAuthEmulator,
  getAuth,
  getRedirectResult,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { firebaseConfig } from "./firebaseConfig.js";

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Firebase Auth functions
var auth = getAuth();

if (window.location.hostname === 'localhost') {
  connectAuthEmulator(auth, 'http://127.0.0.1:5500/');
}

var signInButton = document.getElementById('quickstart-sign-in');
var oauthToken = document.getElementById('quickstart-oauthtoken');
var signInStatus = document.getElementById('quickstart-sign-in-status');
var accountDetails = document.getElementById('quickstart-account-details');

function toggleSignIn() {
  if (!auth.currentUser) {
    var provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    signInWithRedirect(auth, provider);
  } else {
    signOut(auth);
  }
  signInButton.disabled = true;
}

getRedirectResult(auth)
  .then(function (result) {
    if (!result) return;
    var credential = GoogleAuthProvider.credentialFromResult(result);
    if (credential) {
      var token = credential.accessToken;
      oauthToken.textContent = token || '';
    } else {
      oauthToken.textContent = 'null';
    }
    var user = result.user;
  })
  .catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    if (errorCode === 'auth/account-exists-with-different-credential') {
      alert('You have already signed up with a different auth provider for that email.');
    } else {
      console.error(error);
    }
  });

onAuthStateChanged(auth, function (user) {
  if (user) {
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    signInStatus.textContent = 'Signed in';
    signInButton.textContent = 'Sign out';
    accountDetails.textContent = JSON.stringify(user, null, '  ');
  } else {
    signInStatus.textContent = 'Signed out';
    signInButton.textContent = 'Sign in with Google';
    accountDetails.textContent = 'null';
    oauthToken.textContent = 'null';
  }
  signInButton.disabled = false;
});

signInButton.addEventListener('click', toggleSignIn, false);
