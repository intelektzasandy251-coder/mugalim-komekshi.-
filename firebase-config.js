
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  serverTimestamp,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

import {
  initializeAppCheck,
  ReCaptchaV3Provider
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app-check.js";

import {
  getAI,
  GoogleAIBackend,
  getImagenModel
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-ai.js";

export const firebaseConfig = {
  apiKey: "AIzaSyCHwZ3xqprR_eDwlYmGLA5VSKYqAwIgHW4",
  authDomain: "ustaz-ai-32848.firebaseapp.com",
  projectId: "ustaz-ai-32848",
  storageBucket: "ustaz-ai-32848.firebasestorage.app",
  messagingSenderId: "650635015603",
  appId: "1:650635015603:web:3143a4784a508d4bb587c6"
};

export const OWNER_EMAIL = "kalibekovna21@gmail.com";

const APP_CHECK_SITE_KEY = "";

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const db = getFirestore(app);

if (APP_CHECK_SITE_KEY.trim()) {
  try {
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(APP_CHECK_SITE_KEY.trim()),
      isTokenAutoRefreshEnabled: true
    });
  } catch (error) {
    console.warn("App Check іске қосылмады:", error);
  }
}

export const ai = getAI(app, {
  backend: new GoogleAIBackend()
});

export {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged,

  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  serverTimestamp,
  query,
  orderBy,

  getImagenModel
};
