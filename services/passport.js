// passport.js
const passport = require("passport");
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require("./config/keys");

passport.use(
	new FacebookStrategy(
		{
			clientID: keys.FACEBOOK_APP_ID,
			clientSecret: keys.FACEBOOK_APP_SECRET,
			callbackURL: "/auth/facebook/callback"
		},
		function(accessToken, refreshToken, profile, cb) {
			User.findOrCreate({ facebookId: profile.id }, function(err, user) {
				return cb(err, user);
			});
		}
	)
);
