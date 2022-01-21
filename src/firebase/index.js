import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDsqfDUPrlN-RANRZOQALhC09yK4JPhD_k",
  authDomain: "auth-vue-d685c.firebaseapp.com",
  projectId: "auth-vue-d685c",
  storageBucket: "auth-vue-d685c.appspot.com",
  messagingSenderId: "1097190624653",
  appId: "1:1097190624653:web:4ce2b48019ef60de2681c4"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }