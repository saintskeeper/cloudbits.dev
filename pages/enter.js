import { auth, googleAuthProvider } from '../lib/firebase';


export default function Enter(props) {
	const user = null;
	const username = null;

	return (
	  <main>
		  {user ?
		    !username ? <usernameForm /> : <SignOutButton />
		:
		<SignInButton />}
	  </main>
	);
      }

// Sign in with Google button
function SignInButton() {
	const signInWithGoogle = async () => {
	  await auth.signInWithPopup(googleAuthProvider);
	};

	return (
	  <button className="btn-google" onClick={signInWithGoogle}>
	    <img src={'/google.png'} /> Sign in with Google
	  </button>
	);
      }


// Sign out button
function SignOutButton() {
	return <button onClick={() => auth.signOut()}>Sign Out</button>;
      }

      function UsernameForm() {
	return null;
      }