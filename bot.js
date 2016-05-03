var telegram = require('telegram-bot-api');

var api = new telegram({
	token: '<PUT YOUR TOKEN HERE>'
});

api.on('message', function(message) {
	// Received text message
	console.log('received text message:');
	console.log(message);
});

api.on('inline.query', function(message) {
	// Received inline query
	console.log('received inline query:');
	console.log(message);
});

api.on('inline.result', function(message) {
	// Received chosen inline result
	console.log('received inline result:');
	console.log(message);
});

api.on('inline.callback.query', function(message) {
	// New incoming callback query
	console.log('new incoming callback query:');
	console.log(message);
});

api.on('update', function(message) {
	// Generic update object
	// Subscribe on it in case if you want to handle all possible
	// event types in one callback
	console.log('generic update object:');
	console.log(message);
});

