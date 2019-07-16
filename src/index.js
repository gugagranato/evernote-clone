import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const firebase = require('firebase');
require('firebase/firestore');

  firebase.initializeApp({
    apiKey: "AIzaSyCX3bXnoUe9GrWw7bPoqitLyE8sbxzyihc",
    authDomain: "evernote-clone-7151d.firebaseapp.com",
    databaseURL: "https://evernote-clone-7151d.firebaseio.com",
    projectId: "evernote-clone-7151d",
    storageBucket: "evernote-clone-7151d.appspot.com",
    messagingSenderId: "130372742057",
    appId: "1:130372742057:web:25d0e2b2ff56d19c"
  });

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
