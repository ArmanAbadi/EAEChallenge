// Import the functions you need from the SDKs you need
const initializeApp = require("firebase/app");
const getFirestore = require("firebase/firestore");
const collection = require("firebase/firestore");
const getDocs = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2wctSVEFXGSwEy1N5866udMXUQqTHKYc",
  authDomain: "eaec-79c34.firebaseapp.com",
  projectId: "eaec-79c34",
  storageBucket: "eaec-79c34.firebasestorage.app",
  messagingSenderId: "230435794102",
  appId: "1:230435794102:web:65c1197186babd8e63ca17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

(async ()=>{
const querySnapshot = await getDocs(collection(db, "vehicle"));
querySnapshot.forEach((doc) => {
    console.log("bro1");
    console.log(`${doc.id} => ${doc.data()}`);
});
})