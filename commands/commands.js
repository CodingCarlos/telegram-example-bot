// Commands

// Require all command files
var Start = require('./start.js');
// var Test = require('./test.js');

exports.detectCommand = function(api, message) {

	var command = detectCommand(message);

	if(command != false) {
		return runCommand(api, command, message);
	} else {
		return false;
	}
};


// Functions

function detectCommand(message) {

	if(typeof(message) == 'undefined') {
		return false;
	}

	// Check if there is a bot command. 
	if(typeof(message.entities) != 'undefined' && typeof(message.entities[0].type) != 'undefined' && message.entities[0].type == 'bot_command') {
		
		var text = message.text.substring(1);
		return text;

	} else {
		return false;
	}
}

function runCommand(api, command, message) {

	if(typeof(command) == 'undefined' || command === false || command === null) {
		return false;
	}

	// Each command that the bot will recognize, will be here
	switch(command) {
		case 'start':
			console.log('Command start detected');
			Start.start(api, message)
			break;

		// case 'test':
		// 	console.log('Command test detected');
		// 	Test.test(api, message)
		// 	break;

		default:
			console.log("Unexpected command detected: " + command);
			break;
	}
}
