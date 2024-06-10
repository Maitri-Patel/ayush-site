// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
var textToSpeak = '';
var speakButton = document.getElementById('speak');
var storyElement = document.getElementById('story');

// Arrays for generating random phrases
var nouns = ['Ayush', 'Heaven', 'Harsh', 'Krushil', 'Lion'];
var verbs = ['speak', 'eat', 'talk', 'walk', 'drink'];
var adjectives = ['happy', 'sad', 'angry', 'fast', 'slow'];
var anotherNouns = ['ball', 'sky', 'house', 'road', 'river'];
var places = ['park', 'school', 'office', 'home', 'mehsana'];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var speak = new SpeechSynthesisUtterance(string);
	// speak the text
	synth.speak(speak);
}

function getRandomElement(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function updateStory() {
	textToSpeak = `${getRandomElement(nouns)} ${getRandomElement(verbs)} ${getRandomElement(adjectives)} ${getRandomElement(anotherNouns)} in the ${getRandomElement(places)}`;
	storyElement.textContent = textToSpeak;
}

/* Event Listeners
-------------------------------------------------- */
// On click the button speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}

document.getElementById('noun').onclick = function() {
	textToSpeak += getRandomElement(nouns);
	storyElement.textContent = textToSpeak;
}

document.getElementById('verb').onclick = function() {
	textToSpeak += ' ' + getRandomElement(verbs);
	storyElement.textContent = textToSpeak;
}

document.getElementById('adjective').onclick = function() {
	textToSpeak += ' ' + getRandomElement(adjectives);
	storyElement.textContent = textToSpeak;
}

document.getElementById('another-noun').onclick = function() {
	textToSpeak += ' ' + getRandomElement(anotherNouns);
	storyElement.textContent = textToSpeak;
}

document.getElementById('place').onclick = function() {
	textToSpeak += ' in the ' + getRandomElement(places);
	storyElement.textContent = textToSpeak;
}

document.getElementById('generate-story').onclick = function() {
	updateStory();
}

document.getElementById('reset').onclick = function() {
	textToSpeak = '';
	storyElement.textContent = 'Your story will appear here...';
}
