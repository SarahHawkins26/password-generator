// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterChoice = {
  chosenLengthChoice: prompt('How long will your password be?'),
  lowercaseChoice: confirm('Click OK to confirm lowercase characters'),
  uppercaseChoice: confirm('Click OK to confirm uppercase characters'),
  numbersChoice: confirm('Click OK to confirm numeric characters'),
  specialChoice: confirm('Click OK to confirm special characters')
}

var characters = {
  chosenLength: '',
  lowercase: 'abcdefghjklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  special:'!@#$%&*?'
}

var allowedCharacters = '';
if (characterChoice.lowercaseChoice){
  allowedCharacters += characters.lowercase;
}
if (characterChoice.uppercaseChoice){
  allowedCharacters += characters.uppercase;
}
if (characterChoice.numbersChoice){
  allowedCharacters += characters.numbers;
}
if (characterChoice.specialChoice){
  allowedCharacters += characters.special;
}

var groupedCharacters = allowedCharacters.split('');

// Write password to the #password input
function generatePassword() {
  var length = prompt('How long will your password be?');
  var validLength = false;
  if (!validLength){
  if (length >= 8 && length <= 128){
    characters.chosenLength = parseInt(characterChoice.chosenLengthChoice);
    characterChoice.chosenLengthChoice = length;
    characters.chosenLength = length;
    validLength = true;
  } else{
    alert('Password must contain more than 8 characters and less than 128 characters');
  }

  var password = '';
  for (var i = 0; i < characters.chosenLength; i++){
    var index = Math.floor(Math.random() * groupedCharacters.length);
    password += groupedCharacters[index];
  }
  return password;
}
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
