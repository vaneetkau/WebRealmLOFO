console.log("viewPostssss");

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAjKm0uKRHxIBRQtiR1ZFq-ZCTRmSh6M-U",
    authDomain: "webrealmlofo.firebaseapp.com",
    databaseURL: "https://webrealmlofo-default-rtdb.firebaseio.com",
    projectId: "webrealmlofo",
    storageBucket: "webrealmlofo.appspot.com",
    messagingSenderId: "900604719791",
    appId: "1:900604719791:web:2e9ee3e286badcb5669a5a",
    measurementId: "G-ZZH3G9HQHW"
};
    
    // Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, 'Posts');

getDocs(colRef)
    .then((snapshot) => {
        let posts = [];
        snapshot.docs.forEach((doc) => {
            posts.push({...doc.data(), id : doc.id})
            postsList.innerHTML += doc.data().title + "</br>";
        });
        console.log(posts);

    })
    .catch(error => {
        console.log(error.message);
});