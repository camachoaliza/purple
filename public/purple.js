var id;
var numClickEdits = 0;

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
    console.log("USER SIGNED IN there");
    id = firebase.auth().currentUser.uid;
    name = firebase.auth().currentUser.displayName;
    console.log(name);
    document.getElementById("profile").href = "profile.html?id=" + id;
    document.getElementById("forum").href = "feed.html?id=" + id;
    document.getElementById("leaderboard").href = "leaderboard.html?id=" + id;
    document.getElementById("read").href = "read.html?id=" + id;
    document.getElementById("sign-in").hidden = true;
    document.getElementById("sign-out").hidden = false;
  } else { // User is signed out!
    id = "";
    document.getElementById("profile").href = id;
    document.getElementById("sign-in").hidden = false;
    document.getElementById("sign-out").hidden = true;
  }
}

function addFriend() {
  document.getElementById("addFriend").classList = 'btn btn-success btn-sm';
  document.getElementById("addFriend").innerText = "Added";
}

// function getPurple() {
//   this.db = firebase.firestore();
//   var docRef = db.collection("people").doc(id);
//
//   docRef.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
//   }).catch(function(error) {
//     console.log("Error getting document:", error);
//   });
// }

function editProfile() {
  numClickEdits += 1;
  document.getElementById("bio").setAttribute('contenteditable', 'true');
  document.getElementById("name").setAttribute('contenteditable', 'true');
  document.getElementById("editMyProfile").setAttribute('class', "btn btn-success btn-sm");
  document.getElementById("editMyProfile").innerText = "Save Changes";

  if (numClickEdits > 1) {
    saveChanges();
  }
  // return firebase.database().ref().update(updates);
}

function saveChanges() {
  document.getElementById("bio").setAttribute('contenteditable', 'false');
  document.getElementById("name").setAttribute('contenteditable', 'false');
  document.getElementById("editMyProfile").setAttribute('class', "btn btn-secondary btn-sm");
  document.getElementById("editMyProfile").innerText = "Edit Profile";

  var db = firebase.firestore();
  db.collection("people").doc(id).update({
    bio: document.getElementById("bio").innerText,
    name: document.getElementById("name").innerText,
  });

  numClickEdits = 0;
}

// function changeProfile(name) {
//
// }

document.addEventListener('DOMContentLoaded', function() {
    firebase.auth().onAuthStateChanged(authStateObserver);
    var vals = window.location.search.split("=");
    // id = firebase.auth().currentUser.displayName;
    // console.log("name in profile: " + id);
    var db = firebase.firestore();

    db.collection("people").doc(vals[1]).onSnapshot(function (doc) {
      var friendIds = doc.data().friends.split(",");
      document.getElementById("name").innerText = doc.data().name;

      friendIds.forEach(function(friend) {
        if (friend !== "") {
          db.collection("people").doc(friend).onSnapshot(function(doc) {
            document.getElementById("friends").innerHTML += "<a href=\"profile.html?id=" + doc.id + "\"/>" + doc.data().name + "</a><br>";
          });
        }
      });
    });

    try {
        let app = firebase.app()
        let features = ['auth', 'database', 'messaging', 'storage'] .filter(feature => typeof app[feature] === 'function');
     } catch (e) {
         console.error(e);
     }
});

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

//purple indicator
var data = [{
  values: [16, 15, 12],
  labels: ['Left', 'Center', 'Right' ],
  domain: {column: 0},
  marker: {
    line: {
      color: 'black',
      width: 2,
    },
    colors: [
      'rgb(230, 230, 250)',
      'rgb(230, 230, 250)',
      'rgb(230, 230, 250)']
    },
  name: ['Left', 'Center', 'Right'],
  hoverinfo: 'label+percent+name',
  hole: .5,
  type: 'pie'
}];

var layout = {
  title: 'Purple Level',
  height: 400,
  width: 400,
  paper_bgcolor: 'rgba(0,0,0,0)',
  grid: {rows: 1, columns: 1},
  showlegend: false,
  annotations: [
    {
      font: {
        size: 14
      },
      showarrow: false,
      text: '8 Points',
      x: 0.5,
      y: 0.5
    }
  ]
};

Plotly.newPlot('myDiv', data, layout, {showSendToCloud:true});

function readTextFile(file) {
  var allText;
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
          if(rawFile.status === 200 || rawFile.status == 0) {
              allText = rawFile.responseText;
          }
      }
  }
  rawFile.send(null);
  return allText.split("\n");
}
