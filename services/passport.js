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
		async (accessToken, refreshToken, profile, cb) => {
			const existingUser = await User.findOne({ facebookId: profile.id });
			
			if (existingUser) {
				return done(null, existingUser);
			}

			const user = await new User({ facebookId: profile.id }).save();
			done(null,user);
			
			// Code from Passpport example
			// User.findOrCreate({ facebookId: profile.id }, function(err, user) {
			// 	return cb(err, user);
			// });
		}
	)
);
