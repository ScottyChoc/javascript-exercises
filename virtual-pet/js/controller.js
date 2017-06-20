/* jshint esversion:6 */
function Controller(model) {

	this.addPet = function(name) {
		var p = new Pet(name);
		model.addPet(p);
		return p;
	};

	this.playWithPet = function(name, amount) {
		var p = model.getPetByName(name);
		p.play(amount);
		return p;
	};

	this.feedPet = function(name, amount) {
		var f = model.getPetByName(name);
			f.feed(amount);
		return f;
	};

	this.getAllPets = function() {
		return model.getAllPets();
	};

	this.grow = function() {
		model.grow();
	};
	
	this.getHungry = function() {
		model.getHungry();
	};

	this.getBored = function() {
		model.getBored();
	};

}












