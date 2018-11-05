import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyClDuO_AtFxw4Uu52o2dJGbYPgX-pMXMeA",
  authDomain: "reactjs-firebase-88e5e.firebaseapp.com",
  databaseURL: "https://reactjs-firebase-88e5e.firebaseio.com",
  projectId: "reactjs-firebase-88e5e"
};

firebase.initializeApp(config);

const database = firebase.database();
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, GoogleAuthProvider, database as default };
