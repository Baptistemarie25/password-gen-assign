// Assignment code here
var passwordText = document.querySelector("#password");
var password = document.querySelector("#generate");
var characters = "0123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm$#!&%"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  window.alert ("Welcome to Password Generator");

  var passwordLength = window.prompt("How long do you want your password to be? Enter a number between 8 or 128 characters.")

  window.alert ("A strong password must be at least 8 characters long. Includes upper and lower case letters, a combination of numbers and letters, and at least one special character.");

  window.prompt ("what would you like to include in your password?");

  window.prompt (" ")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  writePassword();
