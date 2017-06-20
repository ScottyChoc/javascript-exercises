/* jshint esversion:6 */

var fs = require('fs');

var useStdin = function() {
	var input = process.stdin.read();
	if (input !== null) {
		var inputSplit = input.toString().trim().split(" ");
		if (inputSplit[0] == "cat") {
			//cat <filename>
			catFile(inputSplit[1]);
		} else if (inputSplit[0] == "touch") {
			//touch <filename>
			createNewFile(inputSplit[1]);
		} else if (inputSplit[0] == "rm") {
			//rm <filename>
			rmFile(inputSplit[1]);
		} else if (inputSplit[0] == "replace") {
			//replace <filename> <oldWord> <newWord>
			replaceFile(inputSplit[1], inputSplit[2], inputSplit[3]);
		} else if (inputSplit[0] == "grep") {
			//grep <filename> <str>
			grepFile(inputSplit[1], inputSplit[2]);
		}
	}
};

//create a file (touch)
function createNewFile(fileName) {
	fs.writeFile(fileName, "", function(err){
		if (err) {
			console.log("Could not write to file");
		} else {
			console.log("File created and saved");
		}
	});
}

//read from a file (cat)
function catFile(fileName) {
	fs.readFile(fileName, function(err, data) {
		if (err) {
			console.log("Unable to read from file");
		} else {
			console.log(data.toString());
		}
	});
}

process.stdin.on('readable', useStdin);

/*	Your assignment is to implement the following functionality:
		* remove a file
			"rm" <file name>
			> rm hello.txt
				entirely delete the file hello.txt
*/

function rmFile(fileName) {
	fs.unlink(fileName, function(err, data) {
		if (err) {
			console.log("Unable to remove file");
		} else {
			console.log("File " + fileName + " removed");
		}
	});
}

/*	find and replace a word in the file
		"replace" <file to search> <word to replace> <replacement word>
		> replace hello.txt hello goodbye
			replace all instances of hello in hello.txt with goodbye
		> replace what.txt there their
			replace all instances of there in what.txt with their
*/

function replaceFile(fileName, oldWord, newWord) {
	var newArr = [];
	var count = 0;
	fs.readFile(fileName, function(err, data) {
		if (err) {
			console.log("Unable to read from file");
		} else {
			// convert string to array of words
			var str = data.toString();
			var arr = str.split(" ");
			// loop thru array 

			// Erty's cool hack
			// data = data.toString();
			// data = data.split(oldWord).join(newWord);

			for (var word of arr) {
			// if word is old, replace with new
				if (word == oldWord) {
					newArr.push(newWord);
					count += 1;
				} else {
					newArr.push(word);
				}
			}
			// replace file
			fs.writeFile(fileName, newArr.join(" "), function(err, data) {
				if (err) {
					console.log("Unable to rewrite the file");
				} else {
					console.log("Replaced " + count + " instances of " + oldWord + " with " + newWord + " in " + fileName);
				}
			});
		}
	});
}

/*	find a line in a file
		"grep" <file name> <word to find>
		> grep hello.txt hello
			print out all of the lines in hello.txt that contain "hello"
		> grep what.txt there
			print out all of the lines in what.txt that contain "there"
*/

function grepFile(fileName, str) {
	var count = 0;
	fs.readFile(fileName, function(err, data) {
		if (err) {
			console.log("Unable to read from file"); 
		} else {
			lines = data.toString().split("\n");
			for (var line of lines) {
				if (line.includes(str)) {
					console.log(line);
					count += 1;
				}
			}
			console.log("Found " + count + " lines in " + fileName + " containing " + str);
		}
	});
}

/*	Bonus work:
		* Ask for confirmation before deleting a file
		* Don't let people delete files that are above the current working directory (i.e. disallow "../")
		* Have grep take a regular expression as the word to find
		* Create mkdir and rmdir
*/
