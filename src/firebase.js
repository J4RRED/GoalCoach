import * as firebase from 'firebase';

const config = {
  apiKey: "API Key",
  authDomain: "'name'.firebaseapp.com",
  databaseURL: "https://'name'.firebaseio.com",
  projectId: "name",
  storageBucket: "'name'.appspot.com",
  messagingSenderId: "messagingSenderId"
  };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
