/* jshint esversion:6 */

module.exports = function(mongoose, Checkout, Movie) {
	// What user(s) had the most checkouts?

	Checkout.aggregate(
		{$group: {_id: "$userId", total: {$sum: 1}}},
		{$sort: {total: -1}},
		{$limit: 1},
		(err, user) => {
			console.log("User " + user[0]._id + " has the most checkouts (" + user[0].total + ")");
	});

};
