// Assignment Code
// var generateBtn = document.querySelector("#generate");

function writePassword() {

var passLength = prompt("How long would you like your password to be? Please select a number larger than 7 and less than 129.");

if (passLength < 8 || passLength > 128) {
  while (passLength < 8 || passLength > 128) {
    passLength = prompt("Please re-enter, making sure the number is greater than 7 and less than 129");
  }
}

var passUpper = confirm("Would you like your password to include uppercase letters?");
var passLower = confirm("Would you like your password to include lowercase letters?");
var passNumber = confirm("Would you like your password to include numbers")
var passSpecial = confirm("Would you like your password to include special characters?");

var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];

var combinedArray = [];

if (passUpper === true) {
  combinedArray.push(upperArray);
}

if (passLower === true) {
  combinedArray.push(lowerArray);
}

if (passNumber === true) {
  combinedArray.push(numberArray);
}

if (passSpecial === true) {
  combinedArray.push(specialArray);
}

// created placeholder for array where password will be generated.
var generatedPassword = [];

// loop that runs through as many times as was requested in the first prompt

for (i=0; i < passLength; i++) {

// creating random numbers, one to select which array the generator is going to pull from, and the next to determine which character is going to be pulled from the array

var arraySelector = Math.floor(Math.random() * combinedArray.length);
var characterSelector = Math.floor(Math.random() * combinedArray[arraySelector].length);


// This is where the array and character are randomly chosen

var selectedArray = combinedArray[arraySelector];
var selectedCharacter = selectedArray[characterSelector];

// The characters are then added to their own array for safekeeping as the loop runs through to completion.

generatedPassword.push(selectedCharacter);

// Converting the array to string

passwordText = generatedPassword.join("");

// going to have to write something up that will ensure that each of the selected character types is present in the generated password.

}

// Possibly create a separate function that will post it to the box

document.getElementById("password").textContent = passwordText;

}