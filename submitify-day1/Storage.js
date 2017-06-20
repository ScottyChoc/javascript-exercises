/* jshint esversion:6 */

/*
	This is our extensible storage object. We've written it so that we can
	replace any parts of it in the future with calls to file system or mongo
	without too much effort.
*/
function Storage() {
	var projects = [];
	var users = [];

	this.addProject = (project, cb)  => {
		// cb = callback
		projects.push(project);
		if (cb) {
			cb();
		}
	};

	this.getAllProjects = (cb) => {
		// cb = callback
		cb(projects);
	};

	this.getNextProjectID = (cb) => {
		cb(projects.length + 1);
	};

// TODO
	this.getProjectByID = (id, cb) => {
		cb(projects.find((el) => {
      return el.id === id;
    }));
	};

	
}

module.exports = Storage;
