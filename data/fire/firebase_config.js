  // Import the functions you need from the SDKs you need
  import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
  import {getAnalytics} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDDL8F-sRXTVRftOrnER3Bsvpg5XduxghM",
    authDomain: "saikiasan-github.firebaseapp.com",
    projectId: "saikiasan-github",
    storageBucket: "saikiasan-github.appspot.com",
    messagingSenderId: "44587420543",
    appId: "1:44587420543:web:88928dbc7136e3d5f2684a",
    measurementId: "G-0DN4NF4M4L"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const analytics = getAnalytics(app);