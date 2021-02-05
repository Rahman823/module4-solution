var names = ["yaakov", "rahman", "john", "Joe"];

for(var i = 0; i < 4; i++) {
	name = names[i];
	if(name[0] == 'j' || name[0] == 'J') {

		byeSpeaker.speak(name);
	}
	else {
		helloSpeaker.speak(name);
	}
}
