import * as app from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvBkf6p_Dsq02m0AoFi7wL8qlq9fslISs",
  authDomain: "cart-ba49e.firebaseapp.com",
  projectId: "cart-ba49e",
  storageBucket: "cart-ba49e.appspot.com",
  messagingSenderId: "561732213984",
  appId: "1:561732213984:web:89ac2f65fbc897ac264485",
};

let firebase = app.initializeApp(firebaseConfig);
let db = require("firebase/firestore");
export default db;
// export default firebase;
