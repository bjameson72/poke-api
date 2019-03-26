import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apikey: 'AIzaSyDWgmcpJzJfTWAhWQKKNX6ISkkA6hF__jk',
  authDomain: 'poke-api-will-brock.firebaseapp.com',
  databaseURL: 'https://poke-api-will-brock.firebaseio.com',
  projectId: 'poke-api-will-brock',
  storageBucket: 'poke-api-will-brock.appspot.com',
  messagingSenderId: '303402614128',
});

const base = Rebase.createClass(firebaseApp.database());

export default base;
