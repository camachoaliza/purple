const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
admin.initializeApp();

// Add a user to Firestore database:
exports.setupUsers = functions.auth.user().onCreate(async (user) => {
  var fullName = user.displayName || 'Anonymous';
  await admin.firestore().collection('people').doc(user.uid).set({
    name: fullName,
    color: 0,
    numLeft: 0,
    numRight: 0,
    numCenter: 0,
    points: 0,
  });
});
