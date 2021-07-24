import  firebase from  'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';



const firebaseConfig = {
	apiKey: "AIzaSyBrrqvzdI8iqCfVBb4Sx7Hv9Fgi8_3DTc0",
	authDomain: "react-blog-c29c7.firebaseapp.com",
	projectId: "react-blog-c29c7",
	storageBucket: "react-blog-c29c7.appspot.com",
	messagingSenderId: "41186410198",
	appId: "1:41186410198:web:dbf9b2943ab0e84adf1377",
	measurementId: "G-9QTQLC8R7J"
};


if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

// AUTH
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();



export const firestore = firebase.firestore();
export const storage = firebase.storage()

