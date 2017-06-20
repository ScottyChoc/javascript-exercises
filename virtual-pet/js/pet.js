function Pet(name) {
	this.name = name;
	this.size = 10;
	this.hunger = 0;
	this.fun = 100;

	this.feed = function(food) {
		this.hunger -= food;
		this.fun -= food / 2;
	}

	this.play = function(p) {
		this.fun += p;
		this.hunger += p / 2;
	}
}


