import{	
    signInWithPopup,
	GoogleAuthProvider,
	FacebookAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
} from "firebase/auth";

import {
  firebaseAuth,
  firestore,
  doc,
  updateDoc,
  realTimeDBRef,
  firebaseRealtimeDB,
} from "firebase.config";

