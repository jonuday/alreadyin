// passport.js
const passport = require("passport");
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require("../config/keys");

const User = mongoose.model('users');

// add session cookies by serializing user mongo ID
passport.serializeUser((user, done) => {
	done(null, user.id);
});

// deserialize cookie for user management
passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

// Query Facebook for Login
passport.use(
	new FacebookStrategy(
		{
			clientID: keys.FACEBOOK_APP_ID,
			clientSecret: keys.FACEBOOK_APP_SECRET,
			callbackURL: "/auth/facebook/callback",
			proxy: true
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
