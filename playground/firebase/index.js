import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDkTZvLEQVOgaQK8IqQrmAlfKgmvKb8iFM",
  authDomain: "kirs-todo-app.firebaseapp.com",
  databaseURL: "https://kirs-todo-app.firebaseio.com",
  storageBucket: "kirs-todo-app.appspot.com",
  messagingSenderId: "727483452172"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
	app: {
		name: 'Todo App',
		version: '1.0.0'
	},
	isRunning: true,
	user: {
		name: 'Gaston',
		age: 24
	}
});

var notesRef = firebaseRef.child('notes');

var newNoteRef = notesRef.push();
newNoteRef.set({
	text: 'walk the dog'
});