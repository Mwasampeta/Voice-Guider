const startBtn =document.querySelector("#start-btn");

const recognition =new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResult = false;
recognition.maxAternatives = 1;

const synth = window.speechSynthesis;

startBtn.addEventListener("click", () => {
	recognition.start();
});

let utter = new SpeechSynthesisUtterance('how are you');
utter.onend = ()=>{
recognition.start()
};

recognition.onresult = (e) => {
	utter.volume = 1;
	utter.rate=0.50;
	utter.pitch=0.5;
	
	const transcript = e.results[e.results.length - 1][0].transcript.trim();


	if (transcript==="cakes") {
		recognition.stop();
		utter.text = "walk six feet straight then turn righthand side , 'take it to the upper shelve' . if you want to turnback say 'number one.";		
		synth.speak(utter);
	}

	if (transcript==="book") {
		recognition.stop();
		utter.text = "walk two feet straight then turn righthand side , 'take it to the upper shelve' . if you want to turnback say 'number two ";		
		synth.speak(utter);
	}

	else if (transcript === "sugar") {
		recognition.stop();
		utter.text = "walk six feet straight forwad and turn left if u want to turnback say 'number three'. ";		
		synth.speak(utter);
	} 
	else if (transcript === "salt") {
		recognition.stop();
		utter.text = "walk three feet straight. then take it to the second from upper shelve  . if you want to turnback say 'number four'. ";		
		synth.speak(utter);
	} 
	else if (transcript === "cake and sugar" ){
		recognition.stop();
		utter.text = "walk six feet straight. then turn lefthand side. take it to the upper shelve  . if you want to turnback say 'number three'. ";		
		synth.speak(utter);
	}
	else if (transcript === "sugar and cake") {
		recognition.stop();
		utter.text = "walk six feet straight. then turn lefthand side. take it to the upper shelve  . if you want to turnback say number two'. ";		
		synth.speak(utter);
	} 
	else if (transcript === "cake and salt") {
		recognition.stop();
		utter.text = "walk two feet straight then turn lefthand side,then walk two feet, take it to the upper shelve  . if you want to turnback say 'number one'. ";		
		synth.speak(utter);
	} 
	else if (transcript === "salt and cake") {
		recognition.stop();
		utter.text = "walk two feet straight then turn lefthand side,then walk two feet, take it to the upper shelve  . if you want to turnback say 'number four'. ";		
		synth.speak(utter);
	} 
	else if (transcript === "salt and sugar") {
		recognition.stop();
		utter.text = "walk two feet straight then turn lefthand side,then walk three feet, take it to the lower shelve  . if you want to turnback say 'number three'. ";		
		synth.speak(utter);
	}
	else if (transcript === "sugar and salt") {
		recognition.stop();
		utter.text = "walk two feet straight then turn lefthand side,then walk three feet, take it to the lower shelve  . if you want to turnback say 'number three'. ";		
		synth.speak(utter);
	}
	else if (transcript === "number one") {
		recognition.stop();
		utter.text = "walk two feet straight then turn lefthand side,then walk three feet straight forwad.";		
		synth.speak(utter);
	}
	else if (transcript === "number two") {
		recognition.stop();
		utter.text = "walk two feet straight then turn lefthand side,then walk three feet straight forwad.";		
		synth.speak(utter);
	}
	else if (transcript === "number two") {
		recognition.stop();
		utter.text = "walk two feet straight then turn lefthand side.  then walk three feet straight forwad. ";		
		synth.speak(utter);
	}
	else if (transcript === "chocolate and soap") {
		recognition.stop();
		utter.text = "walk two feet straight then turn lefthand side.  then walk three feet straight forwad. if you want to turnback say 'back six";		
		synth.speak(utter);
	}
	else if (transcript === "back six") {
		recognition.stop();
		utter.text = "walk two feet straight then turn lefthand side.  then walk three feet straight forwad. ";		
		synth.speak(utter);
	}
		else if (transcript === "soap") {
		recognition.stop();
		utter.text = "walk two feet straight then turn lefthand side.   then walk two feet, take it to the upper shelve  . if you want to turnback say 'number one' ";		
		synth.speak(utter);
	}
	else if (transcript === "cake") {
		recognition.stop();
		utter.text = "walk two feet straight then turn lefthand side.  then walk three feet straight forwad. take it to the upper shelve  . if you want to turnback say 'number one' ";		
		synth.speak(utter);
	}

else if (transcript === "chocolate") {
		recognition.stop();
		utter.text = "walk two feet straight then turn lefthand side then walk three feet straight forwad. ";		
		synth.speak(utter);
	}

	else if (transcript === "number three") {
		recognition.stop();
		utter.text = "walk one feet straight then turn lefthand side,then walk three feet straight forwad. ";		
		synth.speak(utter);
	}

	else if (transcript === "number four") {
		recognition.stop();
		utter.text = "walk two feet straight then turn lefthand side,then walk three feet straight forwad. ";		
		synth.speak(utter);
	}

	else if(transcript) {
		recognition.stop();
		utter.text = "product is not available, try another product";		
		synth.speak(utter);
	}

};