// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterTypes = "";
// Write password to the #password input
var passwordLength = 10
function passwordPrompt() {
  var passLengthInput = prompt("select a password length");
  if (passLengthInput < 10 || passLengthInput > 130) {
    alert("Password needs to be between 10 and 130 characters):");
    passwordPrompt()
 } else {
  passwordLength = passLengthInput
 }
  
  var includeSpecialCharacters = confirm("Click Ok to include special characters in the password");
  var includeLowercase = confirm("Click Ok to include lowercase letters in the password");
  var includeUppercase = confirm("Click Ok to include uppercase letters in the password");
  var includeNumbers = confirm("Click Ok to include numbers in the password");
  
  if (includeNumbers === false) {
    alert("Choose one")
  passwordPrompt()
}
  
  
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

function generatePassword() {
  var finishedPassword = "";
for (var i = 0; i < passwordLength; i++) {
var randomNumber = Math.floor(Math.random() * characterTypes.length);
finishedPassword += characterTypes[randomNumber];

}
console.log(finishedPassword)
var securePassword = document.getElementById("password")
securePassword.innerHTML = finishedPassword
}




generateBtn.addEventListener("click", generatePassword);
var copyText = document.querySelector("#generate");
//copyText.select();
//copyText.setSelectionRange(10, 130);

passwordPrompt();