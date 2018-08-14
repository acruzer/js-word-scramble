// Create a function that reverses a word
 function reverseWord (word) {
 	let myArray = word.split("");
 	// console.log("myArray is: ", myArray)
 	let  reversedArray = myArray.reverse("");
 	// console.log("reversedArray is: ", reversedArray)
 	let reversedString = reversedArray.join("");
 	// console.log("reversedString is", reversedString)
 	return reversedString

 }

// let myWord = "Bear is a friend";
// console.log(reverseWord(myWord));

// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.


function reverseInArray(wordArray) {
	let newArray = [];
	for (let word of wordArray) {
		newArray.push(reverseWord(word));

	}
	return newArray
}

let myArray = ["house", "bear", "tornado"]

// console.log(reverseInArray(myArray))

// Create a function that returns a random word from an array

function randomFromArray(wordArray) {

	return wordArray[Math.floor(Math.random() * wordArray.length)];
}

// console.log(randomFromArray(myArray))

// Create an array of words and save it to a variable. 
myArray = ["house", "bear", "tornado", "check", "potato", "cat", "puppies"];
// Using your functions create a second array of reversed words.

let reversedArray = reverseInArray(myArray);

// console.log(reversedArray)


// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?

function makeReverseMap(wordArray) {
	let wordMap = new Map();
	for (let word of wordArray) {
		wordMap.set(reverseWord(word),word);
	}
	return wordMap
}

// console.log(makeReverseMap(myArray))


function checkGuess (guess,clue,wordMap) {
		console.log(guess)
		console.log(wordMap.get(clue))
		console.log(wordMap)
	if (guess === wordMap.get(clue)) {
		return true;
	}
	return false
}

console.log(checkGuess("cat", "tac", makeReverseMap(myArray)))



// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.



// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
