var firebaseConfig = {
  apiKey: "AIzaSyBTrbvrIVkkdACsTAyA12_opYDsgtryh4g",
  authDomain: "colonelby-studentcouncil.firebaseapp.com",
  databaseURL: "https://colonelby-studentcouncil.firebaseio.com",
  projectId: "colonelby-studentcouncil",
  storageBucket: "colonelby-studentcouncil.appspot.com",
  messagingSenderId: "477744491967",
  appId: "1:477744491967:web:0b8d3aae27dcd0cdb8850a"
};
firebase.initializeApp(firebaseConfig);
let DATABASE = firebase.database();
let AUTH = firebase.auth();
async function fetchPageData() {
  return DATABASE.ref("/")
    .once("value")
    .then(function(snapshot) {
      DATA =
        (snapshot.val() && snapshot.val()) ||
        "There was a problem connecting with the database. Please try again later.";
    });
}
function signIn(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      let errorMessage = error.message;
      document.getElementById("sign-in-error").innerHTML = errorMessage;
    });
}
function signOut() {
  firebase
    .auth()
    .signOut()
    .catch(function(error) {
      let errorMessage = error.message;
      document.getElementById("sign-out-error").innerHTML = errorMessage;
    });
}
firebase.auth().onAuthStateChanged(function(user) {
  document.getElementById("sign-out-error").innerHTML = "";
  document.getElementById("sign-in-error").innerHTML = "";
  if (user) {
    document.getElementById("sign-in").classList.add("d-none");
    document.getElementById("sign-out").classList.remove("d-none");
    document.getElementById("content-segment1").classList.remove("d-none");
  } else {
    document.getElementById("sign-in").classList.remove("d-none");
    document.getElementById("sign-out").classList.add("d-none");
    document.getElementById("content-segment1").classList.add("d-none");
  }
});
