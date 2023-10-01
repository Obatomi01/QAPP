// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBjoqvbIa0PUp4TPeez6OUsPHm9riVsiKs',
  authDomain: 'qapp-2abb2.firebaseapp.com',
  databaseURL: 'https://qapp-2abb2-default-rtdb.firebaseio.com',
  projectId: 'qapp-2abb2',
  storageBucket: 'qapp-2abb2.appspot.com',
  messagingSenderId: '922242212253',
  appId: '1:922242212253:web:2ec6d4c9a069fc51100f74',
  measurementId: 'G-7HWQPTRSEN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const firestore = getFirestore(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
