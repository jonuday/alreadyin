// authRoutes.js
// Create routes for authentication

const passport = require('passport');

module.exports = app => {

	// 1. Authenticate user with facebook and set requested scope of access
	app.get(
		"/auth/facebook",
		passport.authenticate("facebook", {
			scope: ["manage_pages"]
		})
	);

	// 2. Use returned profile information
	app.get("/auth/facebook/callback", passport.authenticate("facebook"));

	// 3. User logout 
	app.get("/api/logout",(req,res) => {
		req.logout();
		// Show user as logged out
		res.send(req.user);
	});

	// 4. User test route
	app.get('/api/current_user',(req,res) => {
		res.send(req.user);
	});

}