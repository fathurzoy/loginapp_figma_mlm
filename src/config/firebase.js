
//import depedencies
import firebase from 'firebase'
import auth from 'firebase/firebase-auth'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyC15qzDKKtjclKzGz8Kt_kxkDlql-04Yx4",
  apiKey: process.env.FIREBASE_KEY, //memanggil dari .env FIREBASE_KEY
  authDomain: "batch7-firebaseoke.firebaseapp.com",
  projectId: "batch7-firebaseoke",
  storageBucket: "batch7-firebaseoke.appspot.com",
  messagingSenderId: "871449387362",
  appId: "1:871449387362:web:88b73cd7fcbd3307068c3b",
  measurementId: "G-EM5L55JDSX"
};

//inisialisasi sesuai konfig yang sudah kita buat, supaya kita terkoneksi dengan firebase
firebase.initializeApp(firebaseConfig);

export default firebase;