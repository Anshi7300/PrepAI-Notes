
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotesai-bc11f.firebaseapp.com",
  projectId: "examnotesai-bc11f",
  storageBucket: "examnotesai-bc11f.firebasestorage.app",
  messagingSenderId: "973393981224",
  appId: "1:973393981224:web:2e595b1d13b3cecfb12a1d"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}  