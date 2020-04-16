import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();
firestore
  .collection("users")
  .doc("vHBEZrgnZQ5iKS9kLrK6")
  .collection("cartItems")
  .doc("PzUKVPPzKuHAV3tSrOPB");
firestore.doc("user/vHBEZrgnZQ5iKS9kLrK6/cartItems/PzUKVPPzKuHAV3tSrOPB");
firestore.collection("user/vHBEZrgnZQ5iKS9kLrK6/cartItems");
