import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAIBctDYBnDVOz2guv2VXNCvMpCJaK0FYU",
  authDomain: "chat-app-74992.firebaseapp.com",
  projectId: "chat-app-74992",
  storageBucket: "chat-app-74992.appspot.com",
  messagingSenderId: "600191174505",
  appId: "1:600191174505:web:df4c3c60facf86eb9d1ff8",
  measurementId: "G-W57X4D67F5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

// if (window.location.hostname === 'localhost') {
//   // auth.useEmulator('http://localhost:9099');
//   // db.useEmulator('localhost', '8080');
// }

export { db, auth };
export default firebase;
