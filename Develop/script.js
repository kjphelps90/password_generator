// Assignment Code
// var generateBtn = document.querySelector("#generate");


function writePassword() {

var passLength = prompt("How long would you like your password to be? Please select a number larger than 7 and less than 129.");

if (passLength < 7 || passLength > 128) {
  while (passLength < 7 || passLength > 128) {
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
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*"];

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

//creating a while loop to run through password verification. The for loop is going to create the password and if it doesn't pass the verification at the end then it's going to run through the for loop again until it does pass

var verification = false;

while (verification == false) {

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


// If everything goes well then the array gets converted to string

passwordText = generatedPassword.join("");

}

// this is the space after the for loop, but still within the while loop. Here the password will be verified 

var upperRegex = new RegExp("^(?=.*[A-Z])");
var lowerRegex = new RegExp("^(?=.*[a-z])");
var numberRegex = new RegExp("^(?=.*[0-9])");
var specialRegex = new RegExp("^(?=.*[!@#$%^&*])");

if (passUpper === true) {
  var upperTest = upperRegex.test(passwordText);
}

if (passLower === true) {
  var lowerTest = lowerRegex.test(passwordText);
}

if (passNumber === true) {
  var numberTest = numberRegex.test(passwordText);
}

if (passSpecial === true) {
  var specialTest = specialRegex.test(passwordText);
}

if (upperTest === false || lowerTest === false || numberTest === false || specialTest === false) {
  verification = false;
  i = -1;
  passwordText = "";
  generatedPassword = [];

}
else {
  verification = true;
}



}

// locates the element that has the ID of "password" and replaces the text with the password string

document.getElementById("password").textContent = passwordText;

}