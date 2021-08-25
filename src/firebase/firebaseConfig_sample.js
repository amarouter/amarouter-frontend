import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "authDomain",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "appId",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export const ui = new firebaseui.auth.AuthUI(auth);

export const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return false;
    },

    signInFailure: function (error) {
      // omitted
    },
  },

  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",

  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],

  // Terms of service url.
  tosUrl:
    "https://github.com/amarouter/amarouter-documents/blob/main/policies/en/terms-of-service.md",
  // Privacy policy url.
  privacyPolicyUrl:
    "https://github.com/amarouter/amarouter-documents/blob/main/policies/en/privacy-policy.md",
};
