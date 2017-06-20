/* jshint esversion:6 */

module.exports = function(mongoose, Checkout, Movie) {
	// How many users are there?

	Checkout.distinct('userId', (err, userIds) => {
		console.log("There are " + userIds.length + " users");
	});

};
