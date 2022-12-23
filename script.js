// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterTypes = "";

var passwordLength = 10

//Added password prompt to choose password length and alert user if an incorrect length it entered
function passwordPrompt() {
  var passLengthInput = prompt("select a password length");
  if (passLengthInput < 10 || passLengthInput > 130) {
    alert("Password needs to be between 10 and 130 characters):");
    passwordPrompt()
 } else {
  passwordLength = passLengthInput
 }
  //Character type variables to notify the user what type of characters can be included in the password
  var includeSpecialCharacters = confirm("Click Ok to include special characters in the password");
  var includeLowercase = confirm("Click Ok to include lowercase letters in the password");
  var includeUppercase = confirm("Click Ok to include uppercase letters in the password");
  var includeNumbers = confirm("Click Ok to include numbers in the password");

  if (includeNumbers === false) {
    alert("Choose one")
  passwordPrompt()
}
  
  //List of the characters that will be generated if chosen by the user
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
//Calling to my generate password
function generatePassword() {
  var finishedPassword = "";
for (var i = 0; i < passwordLength; i++) {
var randomNumber = Math.floor(Math.random() * characterTypes.length);
finishedPassword += characterTypes[randomNumber];

}
//Securing the password
console.log(finishedPassword)
var securePassword = document.getElementById("password")
securePassword.innerHTML = finishedPassword
}



//Allowing the user to click the generate button 
generateBtn.addEventListener("click", generatePassword);
var copyText = document.querySelector("#generate");

//Calling the password prompt
passwordPrompt();