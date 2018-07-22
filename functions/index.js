const admin = require("firebase-admin");
const functions = require('firebase-functions');
const createUser = require('./create_user');
const serviceAccount = require("./credentials.json");
const hello

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-b72e1.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
