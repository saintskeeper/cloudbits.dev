import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import "firebase/compat/analytics";
//v9
import { initializeApp } from "firebase/app"
import { getAnalytics, logEvent } from "firebase/analytics";



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



// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;

// Storage exports
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

/// Helper functions

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}

/**
 * Analytics


 for analytic implementation
https://github.com/vercel/next.js/discussions/13654
*/

 export const analytics = () => {
  if (typeof window !== "undefined") {
    //return firebase.analytics()
    return getAnalytics()
  } else {
    return null
  }
 }


