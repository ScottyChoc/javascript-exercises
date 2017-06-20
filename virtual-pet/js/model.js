/* jshint esversion:6 */
function Model() {
	var pets = [];

	this.addPet = function(newPet) {
		pets.push(newPet);
	};

	this.getPetByName = function(name) {
		for(var pet of pets) {
			if (pet.name === name) {
				return pet;
			}
		}
		return null;
	};

	this.getAllPets = function() {
		return pets.slice();
	};

	this.grow = function() {
		for (var pet of pets) {
			pet.size += 0.25;
		}
	};

	this.getHungry = function() {
		for (var pet of pets) {
		pet.hunger += 1;
			if (pet.hunger < 0) {
				pet.hunger = 0;
			}
		}
	};

	this.getBored = function() {
		for (var pet of pets) {
		pet.fun -= 1;
			if (pet.fun < 0) {
				pet.fun = 0;
			}
		}
	};

}
