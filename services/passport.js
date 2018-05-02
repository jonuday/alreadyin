// passport.js
const passport = require("passport");
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require("./config/keys");

const User = mongoose.model('users');

passport.use(
	new FacebookStrategy(
		{
			clientID: keys.FACEBOOK_APP_ID,
			clientSecret: keys.FACEBOOK_APP_SECRET,
			callbackURL: "/auth/facebook/callback"
		},
		function(accessToken, refreshToken, profile, cb) {
			new User({ facebookId: profile.id }).save();
			// Code from Passpport example
			// User.findOrCreate({ facebookId: profile.id }, function(err, user) {
			// 	return cb(err, user);
			// });
		}
	)
);
