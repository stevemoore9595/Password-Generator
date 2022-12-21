// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var length= prompt("How many characters would you like your password to contain? (between 10 and 130 characters):");

  //var passwordText = document.querySelector("#password");

 // passwordText.value = password;

  var includeSpecialCharacters = confirm("Click Ok to include special characters in the password");
  var includeLowercase = confirm("Click Ok to include lowercase letters in the password");
  var includeUppercase = confirm("Click Ok to include uppercase letters in the password");
  var includeNumbers = confirm("Click Ok to include numbers in the password");

  var characterTypes = "";
  if (includeSpecialCharacters) {
    characterTypes += "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";
  }
  if (includeLowercase) {
    characterTypes += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    characterTypes += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers) {
    characterTypes += "0123456789";
  }
}

var password = "";
for (var i = 0; i < length; i++) {

}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
