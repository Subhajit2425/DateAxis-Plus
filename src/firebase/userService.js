import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export const createUser = async (name) => {
  const docRef = await addDoc(collection(db, "users"), {
    name,
    createdAt: serverTimestamp(),
  });

  localStorage.setItem("userId", docRef.id);
  return docRef.id;
};
