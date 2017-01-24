import firebase from 'firebase';

try {
// Initialize Firebase
	var config = {
	  apiKey: "AIzaSyDkTZvLEQVOgaQK8IqQrmAlfKgmvKb8iFM",
	  authDomain: "kirs-todo-app.firebaseapp.com",
	  databaseURL: "https://kirs-todo-app.firebaseio.com",
	  storageBucket: "kirs-todo-app.appspot.com",
	  messagingSenderId: "727483452172"
	};
	firebase.initializeApp(config);
} catch (e) {
	console.log(e);
}

export var firebaseRef = firebase.database().ref();
export default firebase;