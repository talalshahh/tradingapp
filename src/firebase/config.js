// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdRREhvtN767on9Cym4PgZ27lbn8_Tn90",
  authDomain: "trading-app-a31ab.firebaseapp.com",
  projectId: "trading-app-a31ab",
  storageBucket: "trading-app-a31ab.appspot.com",
  messagingSenderId: "449856616502",
  appId: "1:449856616502:web:f47090c7fd6541b6e58097",
  measurementId: "G-MPYBPP8HZB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// const analytics = getAnalytics(app);
