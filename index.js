// AlredyIn NodeJS Server
// version 1.0.0
// author Jonathan Day
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
var request = require("request");

var app = express();

// Set path bases
app.use(express.static(path.join(__dirname, 'public')));

// Set views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set server pages
app.get("/", (req, res) => res.render('pages/index'));

// Start the server
var server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// Facebook Webhook Call
// Used for verification
// app.get("/webhook", function (req, res) {
//   if (req.query["hub.verify_token"] === "this_is_my_token") {
//     console.log("Verified webhook");
//     res.status(200).send(req.query["hub.challenge"]);
//   } else {
//     console.error("Verification failed. The tokens do not match.");
//     res.sendStatus(403);
//   }
// });

// AWS Facial Recognition Call


