import * as firebase from "firebase/app";

const config = {
    apiKey: "AIzaSyCv5bo0qLFQ6YxRkQk04ssUvJsqjCZ8KuU",
    authDomain: "healthe-8a7fd.firebaseapp.com",
    databaseURL: "https://healthe-8a7fd.firebaseio.com",
    projectId: "healthe-8a7fd",
    storageBucket: "healthe-8a7fd.appspot.com",
    messagingSenderId: "73806913302"
  };

const fire = firebase.initializeApp(config);

export default fire;
