// not needed anymore -- delete later
// var config = {
//   apiKey: "AIzaSyDp94-EKJuP_IazhMcZWzzMTu44Uz6qCcQ",
//   databaseURL: "https://purple-4ecfa.firebaseio.com",
//   authDomain: "purple-4ecfa.firebaseapp.com",
// };
//
// firebase.initializeApp(config);
// var id;
//
// function addFriend() {
//   document.getElementById("addFriend").classList = 'btn btn-success btn-sm';
//   document.getElementById("addFriend").innerText = "Added";
// }
//
// function editProfile() {
//   var test = document.getElementById("bio").setAttribute('contenteditable', 'true');
//   console.log(test);
// }
//
// function signIn() {
//   var provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithPopup(provider);
// }
//
// function signOut() {
//   firebase.auth().signOut();
//   window.location.redirect("https://purple-4ecfa.firebaseapp.com/");
// }
//
// function authStateObserver(user) {
//   if (user) { // User is signed in!
//     console.log("USER SIGNED IN here");
//     id = firebase.auth().currentUser.uid;
//     console.log(id);
//     document.getElementById("profile").href = "profile.html?id=" + id;
//     document.getElementById("forum").href = "feed.html?id=" + id;
//     document.getElementById("leaderboard").href = "leaderboard.html?id=" + id;
//     document.getElementById("sign-in").hidden = true;
//     document.getElementById("sign-out").hidden = false;
//   } else { // User is signed out!
//     id = "";
//     document.getElementById("profile").href = id;
//     document.getElementById("sign-in").hidden = false;
//     document.getElementById("sign-out").hidden = true;
//   }
// }
//
// document.addEventListener('DOMContentLoaded', function() {
//     firebase.auth().onAuthStateChanged(authStateObserver);
//     var vals = window.location.search.split("=");
//     // id = firebase.auth().currentUser.displayName;
//     // console.log("name in profile: " + id);
//     var db = firebase.firestore();
//
//     db.collection("people").doc(vals[1]).onSnapshot(function (doc) {
//       var friendIds = doc.data().friends.split(",");
//
//       friendIds.forEach(function(friend) {
//         if (friend !== "") {
//           db.collection("people").doc(friend).onSnapshot(function(doc) {
//             document.getElementById("friends").innerHTML += "<a href=\"profile.html?id=" + doc.id + "\"/>" + doc.data().name + "</a><br>";
//           });
//         }
//       });
//     });
//
//     try {
//         let app = firebase.app()
//         let features = ['auth', 'database', 'messaging', 'storage'] .filter(feature => typeof app[feature] === 'function');
//      } catch (e) {
//          console.error(e);
//      }
// });

<div class="col-md-8">
        <div class="profile-content">
          <!-- <h1>Hi, <span id="hi_name" contenteditable="false"></span></h1> -->
          <div class="recent_activity">
            <div class="row">
                <div class="col-xl-6 col-md-12">
                    <div class="card latest-update-card">
                        <div class="card-header">
                            <h5>Your Recent Activity</h5>
                            <div class="card-header-right">
                                <ul class="list-unstyled card-option">
                                    <li><i class="fa fa fa-wrench open-card-option"></i></li>
                                    <li><i class="fa fa-window-maximize full-card"></i></li>
                                    <li><i class="fa fa-minus minimize-card"></i></li>
                                    <li><i class="fa fa-refresh reload-card"></i></li>
                                    <li><i class="fa fa-trash close-card"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-block">
                            <div class="latest-update-box">
                                <div class="row p-t-20 p-b-30">
                                    <div class="col-auto text-right update-meta">
                                        <p class="text-muted m-b-0 d-inline">2 hrs ago</p>
                                        <i class="fa far fa-newspaper bg-twitter update-icon"></i>
                                    </div>
                                    <div class="col">
                                        <h6>CNN +5 points</h6>
                                        <p class="text-muted m-b-0">Nikki Haley says top Trump aides tried to recruit her to undermine president</p>
                                    </div>
                                </div>
                                <div class="row p-b-30">
                                    <div class="col-auto text-right update-meta">
                                        <p class="text-muted m-b-0 d-inline">4 hrs ago</p>
                                        <i class="fa fas fa-video bg-c-red update-icon"></i>
                                    </div>
                                    <div class="col">
                                        <h6>Fox News +5 points</h6>
                                        <p class="text-muted m-b-0">Fox News Sunday with Chris Wallace</p>
                                    </div>
                                </div>
                                <div class="row p-b-30">
                                    <div class="col-auto text-right update-meta">
                                        <p class="text-muted m-b-0 d-inline">1 day ago</p>
                                        <i class="fas fa-lock-open bg-c-green update-icon"></i>
                                    </div>
                                    <div class="col">
                                        <h6>New level unlocked!</h6>
                                        <p class="text-muted m-b-0">You have now achieved level lavender.</p>
                                    </div>
                                </div>
                                <div class="row p-b-0">
                                    <div class="col-auto text-right update-meta">
                                        <p class="text-muted m-b-0 d-inline">2 day ago</p>
                                        <i class="fa fas fa-user-plus bg-facebook update-icon"></i>
                                    </div>
                                    <div class="col">
                                        <h6>+2 Friend Requests</h6>
                                        <p class="text-muted m-b-10">This is great, keep it up!</p>
                                        <div class="table-responsive">
                                            <table class="table table-hover">
                                                <tbody>
                                                    <tr>
                                                        <td class="b-none">
                                                            <a href="#!" class="align-middle">
                                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="user image" class="img-radius img-40 align-top m-r-15">
                                                                <div class="d-inline-block">
                                                                    <a href= "profile.html?id=PNw1eSh4LK2NNXWGwzvV"><h6>Jeny William</h6></a>
                                                                    <p class="text-muted m-b-0">Graphic Designer</p>
                                                                </div>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="b-none">
                                                            <a href="#!" class="align-middle">
                                                                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="user image" class="img-radius img-40 align-top m-r-15">
                                                                <div class="d-inline-block">
                                                                    <a href= 'profile.html?id=bEhc50tvYfZtYcf5Tyg2'><h6>John Deo</h6></a>
                                                                    <p class="text-muted m-b-0">Web Designer</p>
                                                                </div>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <a href="#!" class="b-b-primary text-primary">View all activity</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
</div>
