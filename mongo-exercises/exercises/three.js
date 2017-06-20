/* jshint esversion:6 */

module.exports = function(mongoose, Checkout, Movie) {
	//What is the title of the movie(s) that was the most checked out?

  Checkout.aggregate(
    {$group: {_id: "$movieId", total: {$sum: 1}}},
    {$sort: {total: -1}},
    {$limit: 1},
    (err, topMovie) => {
      Movie.find({_id: topMovie[0]},
        (err, movie) => {
        console.log("\"" + movie[0].title + "\" has been checked out the most times (" + topMovie[0].total + ")");
        });
    });

};
