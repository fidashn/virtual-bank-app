import { initializeApp } from 'firebase/app';
import {getAuth, } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA2HEwJu-y4iPwAWYyeVw72wWsU4qcMPM8",
  authDomain: "virtual-bank-4e602.firebaseapp.com",
  projectId: "virtual-bank-4e602",
  storageBucket: "virtual-bank-4e602.appspot.com",
  messagingSenderId: "36493207775",
  appId: "1:36493207775:web:6d795034085a231be3216a",
  measurementId: "G-4GLK1B82V7"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app); 

