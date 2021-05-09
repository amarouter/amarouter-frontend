import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
/*
export const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "authDomain",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "appId",
};
*/

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const docRef = firestore.doc("blog_posts/1");

docRef
  .get()
  .then((snapshot) => {
    if (snapshot && snapshot.exists) {
      const myData = snapshot.data();
      console.log("My Data: ", myData);
    }
  })
  .catch((error) => {
    console.log("Got an error: ", error);
  });
