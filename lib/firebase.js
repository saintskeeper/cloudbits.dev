import  firebase from  'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';



export const fromMillis = firebase.firestore.Timestamp.fromMillis;


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
	  createdAt: data.createdAt.toMillis(),
	  updatedAt: data.updatedAt.toMillis(),
	};
      }