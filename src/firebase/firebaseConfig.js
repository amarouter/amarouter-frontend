import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

import * as firebaseui from "firebaseui";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export const ui =
  firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

export const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function () {
      // expected inputs: authResult: any, redirectUrl: any
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return false;
    },

    signInFailure: function () {
      // expected input: error: any
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
  privacyPolicyUrl: function () {
    // URL to your privacy policy
    window.location.assign(
      "https://github.com/amarouter/amarouter-documents/blob/main/policies/en/privacy-policy.md"
    );
  },
};
