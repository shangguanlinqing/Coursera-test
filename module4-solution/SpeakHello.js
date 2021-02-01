(function(windowObj){
	var helloSpeaker = {};
	var speakWord = "Hello";

	helloSpeaker.speak = function(name){
  		console.log(speakWord + " " + name);
	};

	windowObj.helloSpeaker = helloSpeaker;
})(window);



