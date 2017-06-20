/* jshint esversion:6 */
$(document).ready(function(){
	var m = new Model();
	var c = new Controller(m);
	var v = new View(c);

	v.showAllPets();

	$('#newpet').click(function(){
		v.createPet();
    $('#petname').val("");
	});

  setInterval(v.updateHTML, 5000);

});

