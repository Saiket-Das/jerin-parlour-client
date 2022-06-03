import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDu-yVud4pl-RTTJxwpgvc6L2RF5RBUnPI",
    authDomain: "jerin-parlour-f26c0.firebaseapp.com",
    projectId: "jerin-parlour-f26c0",
    storageBucket: "jerin-parlour-f26c0.appspot.com",
    messagingSenderId: "285041023123",
    appId: "1:285041023123:web:f2dbb5a1e83b3027021566"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
