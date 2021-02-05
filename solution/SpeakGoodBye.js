(function (window) {
	var byeSpeaker = {};
	function speak (name) {
		console.log(speakWord + " " + name);
	}
// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
	var speakWord = "GoodBye";
	byeSpeaker.speak = function (name) {
  		console.log(speakWord + " " + name);
	}
	window.byeSpeaker = byeSpeaker;
})(window);