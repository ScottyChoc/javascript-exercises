/* jshint esversion:6 */

module.exports = function(mongoose, Checkout, Movie) {
	// Which users checked out any of the Lord of the Rings trilogy?

	Movie.find({title: /^The Lord of the Rings/},
	(err, movies) => {
		Checkout.distinct('userId',
			{movieId: {$in: movies}},
			(err, users) => {
				console.log(JSON.stringify(users));
				console.log(users.length + " users have checked out any of the Lord of the Rings trilogy");
			});
	});

};

