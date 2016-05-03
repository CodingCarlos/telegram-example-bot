// Start command

exports.start = function(api, message) {

	console.log('Start command');

	var start = "Hi! I'm a sample bot. It's easy to create more commands using the example code that @CodingCarlos have done ^^";

	api.sendMessage({
		chat_id: message.chat.id,
		text: start
	})
	.then(function(message) {
		console.log(message);
	})
	.catch(function(err) {
		console.log(err);
	});

};
