import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported  } from "firebase/analytics";

import {getReactNativePersistence, initializeAuth} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore'


// 1. create new project on firebase console
// 2. enable email and password auth provider in authentication
// 3. create a web app and copy the firebseConfigs below 

const firebaseConfig = {
  apiKey: "AIzaSyCObyzbClAEPnaV_jJLOj4dj-O8Y3-Nc0U",
  authDomain: "atv04ddmii-pamii.firebaseapp.com",
  projectId: "atv04ddmii-pamii",
  storageBucket: "atv04ddmii-pamii.firebasestorage.app",
  messagingSenderId: "455443717563",
  appId: "1:455443717563:web:659486a3f472948f61f89e",
  measurementId: "G-8Q57Z6QCP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics(app);
  }
});

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');
