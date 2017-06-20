/* jshint esversion:6 */
function View(controller) {

	this.createPetHTML = function(pet) {
		var $playAmount = $("<input type=\"number\" id=\"playamount\" class=\"numinput\">");
		var $playButton = $("<button>Play!</button>");
		var $feedAmount = $("<input type=\"number\" id=\"feedamount\" class=\"numinput\">");
		var $feedButton = $("<button>Feed!</button>");

		$playButton.click(function() {
			var playAmount = $("#playamount").val();
			playAmount = parseInt(playAmount);
			if (!playAmount) {
				playAmount = 0;
			}
			controller.playWithPet(pet.name, playAmount);
			this.showAllPets();
			$("#playamount").val("");
		}.bind(this));

		$feedButton.click(function() {
			var feedAmount = $("#feedamount").val();

			feedAmount = parseInt(feedAmount);
			if (!feedAmount) {
				feedAmount = 0;
			}
			controller.feedPet(pet.name, feedAmount);
			this.showAllPets();
			$("#feedamount").val("");
		}.bind(this));

		var $pet = $("<div class=\"pet\"><h1>" +
			pet.name +
			"</h1><p>Size: " +
			pet.size +
			" lbs" +
			"</p><p> Hunger: " +
			pet.hunger +
			"</p><p>Fun: " +
			pet.fun +
			"</p></div>"
		);
		$pet.append($playAmount);
		$pet.append($playButton);
		$pet.append($feedAmount);
		$pet.append($feedButton);
		return $pet;
	};

	this.showAllPets = function() {
		$('#output').html("");
		var allPets = controller.getAllPets();
		for(var pet of allPets) {
			var petHTML = this.createPetHTML(pet);
			$('#output').append(petHTML);
		}
	};

	this.createPet = function() {
		var name = $('#petname').val();
		controller.addPet(name);
		this.showAllPets();
	};

	this.updateHTML = function() {
		controller.getHungry();
		controller.getBored();
		controller.grow();
		this.showAllPets();
	}.bind(this);


}
