var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"]

for(var i = 0; i < 10; i++) {
	name = names[i];
	if(name[0] == 'j' || name[0] == 'J') {

		byeSpeaker.speak(name);
	}
	else {
		helloSpeaker.speak(name);
	}
}
