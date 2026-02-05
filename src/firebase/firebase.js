import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvmxW845n5i5E7sDBz3bbftfF7k8Mcjrg",
  authDomain: "dateaxis-plus.firebaseapp.com",
  projectId: "dateaxis-plus",
  storageBucket: "dateaxis-plus.appspot.com",
  messagingSenderId: "69334465895",
  appId: "1:69334465895:web:91ebd85442b120b2d43c2",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
