import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Communicado</h2>
      <p>Sign in with Google to experience new level of interaction</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
