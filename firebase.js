import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDdOXPjVALXqm5jEW833auH2HTwHGjdzEk",
  authDomain: "docs-3792a.firebaseapp.com",
  projectId: "docs-3792a",
  storageBucket: "docs-3792a.appspot.com",
  messagingSenderId: "722205829705",
  appId: "1:722205829705:web:c727d1eb1b704623e62d98",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
