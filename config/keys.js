// keys.js

if (process.env.NODE_ENV === 'production') {
	// return production
	module.exports = require('./prod');
} else {
	// return dev
	module.exports = require('./dev');
}
