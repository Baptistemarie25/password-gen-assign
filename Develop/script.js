// Reference to #generate element
var generateBtn = document.querySelector("#generate");

// Assign Variables
var lowerCaseLet= "abcdefghijklmnopqrstuvwxyz";
var upperCaseLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!@#$%^&*";
var numberOptions = "0123456789";

// Function to generate password 
function passwordGenerated() {
  // Variables for required password criteria 
  var passLength = prompt('Please choose password length. Enter a number between (8-128)');
  var lowerCaseOptions = confirm("Would you like to add lowercase letters?");
  var upperCaseOptions = confirm("Would you like to add uppercase letters?");
  var specialChars = confirm("Do you want to add special characters?");
  var numberOptions = confirm("Do you want to include numbers?");

  //variable for acceptable password characters
  var viableChars = "";

  // if statements based on user input 
  if (lowerCaseOptions) {
    viableChars += lowerCaseOptions;
  }

  if (upperCaseOptions) {
    viableChars += upperCaseOptions;
  }

  if (specialChars) {
    viableChars += specialChars;
  }

  if (numberOptions) {
    viableChars += numberOptions;
  }

  // for loop 
  var password = "";

  for (var i = 0; i < passLength; i++) {
    var randomNumber = Math.floor(Math.random() * viableChars.length)
    password += viableChars.charAt(randomNumber);
  }

  return password;
}

// Write password to the #password input
function writePassword() {

  window.prompt (" ")
  var password = passwordGenerated();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  writePassword();
