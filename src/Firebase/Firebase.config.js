// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsSkGZ_9y6iyBuM6OUIzr_ZWVKafuVOYU",
  authDomain: "task-manager-b97f9.firebaseapp.com",
  projectId: "task-manager-b97f9",
  storageBucket: "task-manager-b97f9.appspot.com",
  messagingSenderId: "482272046641",
  appId: "1:482272046641:web:f85bdcad844d36ee49ef10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;