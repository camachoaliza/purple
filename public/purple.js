var id;
var frontMessage = "Welcome to Purple! Compete with your friends to read, digest, and reflect on a diversity of sources on the 2020 Presidential Elections.";

function signIn() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

function signOut() {
  firebase.auth().signOut();
}

function authStateObserver(user) {
  if (user) { // User is signed in!
      document.getElementById("sign-in").hidden = true;
      document.getElementById("sign-in-header").hidden = true;
      document.getElementById("sign-out").hidden = false;
      id = firebase.auth().currentUser.uid;
      var name = firebase.auth().currentUser.displayName
      document.getElementById("front-message").innerHTML = "Hi, " + name + "!";
      document.getElementById("profile-link").hidden = false;
      document.getElementById("profile-link").href = "profile.html?id=" + id;
  } else { // User is signed out!
      document.getElementById("content").innerHTML = "";
      document.getElementById("sign-out").hidden = true;
      document.getElementById("back-to-home").hidden = false;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //

  firebase.auth().onAuthStateChanged(authStateObserver);
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  var db = firebase.firestore();
  // db.collection("people").get().then(function(querySnapshot) {
  //   var s = "";
  //   querySnapshot.forEach(function(doc) {
  //     s += "<p>" + doc.data().name + "</p>";
  //   });
  //   document.getElementById("people").innerHTML = s;
  // });
  //
  // db.collection("posts").get().then(function(querySnapshot) {
  //   var s = "";
  //   querySnapshot.forEach(function(doc) {
  //     s += "<p>" + doc.data().name + ": " + doc.data().text + "</p>";
  //   });
  //   document.getElementById("posts").innerHTML = s;
  // });

  //This is the javascript that will allow you to update the profile template for the selected user.
  // var vals = window.location.search.split("=");
  // db.collection("people").doc(vals[1]).onSnapshot(function (doc) {
   // });


  try {
    let app = firebase.app();
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
    // document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
  } catch (e) {
    console.error(e);
    // document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
  }
});
