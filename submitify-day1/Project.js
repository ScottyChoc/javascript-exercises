/*jshint esversion:6 */

/*
	Description of a Project object. Currently only on the backend, but
	we could actually share this with the frontend if we wanted... hmm...
*/
function Project(id, name, description, author) {
	this.id = id;
	this.name = name;
	this.description = description;
	this.votes = [];
	this.author = author;

	this.getVoteCount = () => {
		return this.votes.length;
	};

	this.addVote = (user_id) => {
		var user = "scott";
		if (this.votes.includes(user)) {
			return false;
		}
		this.votes.push(user);
		return true;
	};
}

module.exports = Project;
