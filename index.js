// AlredyIn NodeJS Server
// version 1.0.0
// author Jonathan Day

const express = require("express");
const mongoose = require("mongoose");
require('./services/passport');
const keys = require('./config/keys');

// Connect to database
mongoose.connect(keys.mongoURI);

// Declare the router.
const app = express();

require('./routes/authRoutes.js')(app);


// Start server on Heroku or port 5000 locally.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
