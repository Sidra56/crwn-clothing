import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCrHoLYRHz-iFFmO-3vFsQgKJiouePFKxQ",
  authDomain: "crwn-db-c8fd0.firebaseapp.com",
  databaseURL: "https://crwn-db-c8fd0.firebaseio.com",
  projectId: "crwn-db-c8fd0",
  storageBucket: "crwn-db-c8fd0.appspot.com",
  messagingSenderId: "958859189123",
  appId: "1:958859189123:web:8d11d7215154baf61eb4b6",
  measurementId: "G-BC3KHN0X43",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
