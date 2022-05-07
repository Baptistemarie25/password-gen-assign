// Reference to #generate element
var generateBtn = document.querySelector("#generate");

// Assign Variables
var lowerCaseLet= "abcdefghijklmnopqrstuvwxyz";
var upperCaseLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChars = "!@#$%^&*"
var numberOptions = "0123456789"

function passwordGenerated() {
  var passLength = prompt("Please choose password length. Enter a number between (8-128)");
  var lowerCaseOptions = confirm("Would you like to add lowercase letters?");
  var upperCaseOptions = confirm("Would you like to add uppercase letters?");
  var specialChars = confirm("Do you want to add special characters?");
  var numberOptions = confirm("Do you want to include numbers?");
  
}

// Write password to the #password input
function writePassword() {

  window.prompt (" ")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  writePassword();
