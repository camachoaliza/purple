var id;

function signIn() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

function signOut() {
  firebase.auth().signOut();
  window.location.redirect("https://purple-4ecfa.firebaseapp.com/");
}

function authStateObserver(user) {
  if (user) { // User is signed in!
      id = firebase.auth().currentUser.uid;
      document.getElementById("profile").href = "profile.html?id=" + id;
      document.getElementById("forum").href = "feed.html?id=" + id;
      document.getElementById("leaderboard").href = "leaderboard.html?id=" + id;
      document.getElementById("sign-in").hidden = true;
      document.getElementById("sign-out").hidden = false;
  } else { // User is signed out!
      id = "";
      document.getElementById("profile").href = id;
      document.getElementById("sign-in").hidden = false;
      document.getElementById("sign-out").hidden = true;
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
