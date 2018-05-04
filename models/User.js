// User.js
// user.js
const mongoose = require('mongoose');
const { Schema } = mongoose; // destructured call equal to const Schema = mongoose.Schema; 

const userSchema = new Schema({
	facebookId: String
});

// Declare the collection
mongoose.model('users', userSchema);