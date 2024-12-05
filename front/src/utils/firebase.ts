// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcBPAuMal9-V6fq6V_asqTLjVMEn9XvQM",
  authDomain: "ignite-call-53ab0.firebaseapp.com",
  projectId: "ignite-call-53ab0",
  storageBucket: "ignite-call-53ab0.firebasestorage.app",
  messagingSenderId: "94056254434",
  appId: "1:94056254434:web:309b9a400c8696e13a87bb",
  measurementId: "G-DGWWWKLXH1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user; // Aqui você terá o token e informações do usuário.
  } catch (error) {
    console.error("Erro ao autenticar com o Google", error);
  }
};
