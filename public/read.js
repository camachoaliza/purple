// function openForm(title) {
//   document.getElementById("myForm").style.display = "block";
// }
//
// function closeForm() {
//   document.getElementById("myForm").style.display = "none";
// }
var colors = ["white", "lavender","plum", "violet", "orchid", "purple"];
var thresholds = [0, 5, 9, 13, 17, 21];

function updateScore(leftPts, centerPts, rightPts) {
    var vals = window.location.search.split("=");
    var db = firebase.firestore();

    var numRight;
    var numLeft;
    var numCenter;
    var points;
    var color;

    db.collection("people").doc(vals[1]).onSnapshot(function (doc) {
       numRight = doc.data().numRight;
       numLeft = doc.data().numLeft;
       numCenter = doc.data().numCenter;
       points = doc.data().points + 1;
       color = doc.data().color;

       var alignment = numLeft - numRight;
       if (alignment == 0) {
         thresholds.forEach(function(threshold, i){
           if (points >= threshold) {
             color = colors[i];
           }
         });
       }
    });

    setTimeout(function() {
      db.collection("people").doc(vals[1]).update({
        numRight: numRight + rightPts,
        numLeft: numLeft + leftPts,
        numCenter: numCenter + centerPts,
        points: points,
        color: color,
      });
    }, 2500);
}

document.addEventListener('DOMContentLoaded', function() {
    firebase.auth().onAuthStateChanged(authStateObserver);
    var vals = window.location.search.split("=");
    var db = firebase.firestore();

    db.collection("people").doc(vals[1]).onSnapshot(function (doc) {
       var name = doc.data().name;
       var color = doc.data().color;
       var numRight = doc.data().numRight;
       var numCenter = doc.data().numCenter;
       var numLeft = doc.data().numLeft;
       var points = doc.data().points;

       var alignment = numLeft - numRight;
       var readThis = "";
       var nextColorIndex = colors.indexOf(color) + 1;
       var nextColor = colors[nextColorIndex];

       if (alignment < 0) {
         readThis += "Read more center and left articles to level up to " + nextColor + "!";
       } else if (alignment > 0) {
         readThis += "Read more center and right articles to level up to " + nextColor + "!";
       } else {
         if (color == "purple") {
           readThis += "Wow! You've reached Purple! Keep on reading!"
         } else {
           readThis += "Read more articles to level up to " + nextColor + "!"
         }
       }
       document.getElementById("message").innerHTML = "Hey, " + name +
       "! Your color right now is " + color + ", and you have " + points + " points! " + readThis;
    });

  try {
      let app = firebase.app()
      let features = ['auth', 'database', 'messaging', 'storage'] .filter(feature => typeof app[feature] === 'function');
   } catch (e) {
       console.error(e);
   }
});

// CNN
document.getElementById("cnn").innerHTML += "<ul>";
var articles = readTextFile("cnnLinks.txt");
articles.forEach(function(article) {
  if (article != "") {
    var title = article.split(",, ")[0];
    var link = article.split(",, ")[1];
    document.getElementById("cnn").innerHTML += "<li><a onClick=\"updateScore(0,1,0)\" target=\"_blank\" href=\"" + link + "\">" + title + "</a></li>";
  }
});
document.getElementById("cnn").innerHTML += "</ul>";

// NYT
document.getElementById("nyt").innerHTML += "<ul>";
var articles = readTextFile("nytLinks.txt");
articles.forEach(function(article) {
  if (article != "") {
    var title = article.split(",, ")[0];
    var link = article.split(",, ")[1];
    document.getElementById("nyt").innerHTML += "<li><a onClick=\"updateScore(1,0,0)\" target=\"_blank\"  href=\"" + link + "\">" + title + "</a></li>";
  }
});
document.getElementById("nyt").innerHTML += "</ul>";

// FOX
document.getElementById("fox").innerHTML += "<ul>";
var articles = readTextFile("foxLinks.txt");
articles.forEach(function(article) {
  if (article != "") {
    var title = article.split(",, ")[0];
    var link = article.split(",, ")[1];
    document.getElementById("fox").innerHTML += "<li><a onClick=\"updateScore(0,0,1)\" target=\"_blank\" href=\"" + link + "\">" + title + "</a></li>";
  }
});
document.getElementById("fox").innerHTML += "</ul>";
