// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLength = prompt("How long would you like your password to be?");
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

var arraySelector = Math.floor(Math.random() * combinedArray.length);
var characterSelector = Math.floor(Math.random() * combinedArray[arraySelector].length);

console.log(arraySelector);
console.log(characterSelector);

var selectedArray = combinedArray[arraySelector];
var selectedCharacter = selectedArray[characterSelector];

console.log(selectedArray);
console.log(selectedCharacter);



// for (i=0; i < passLength, i++) {
  

// }




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
