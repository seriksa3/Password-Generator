// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    "\\",
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  // 
  function generatePassword() {

    let passwordLength;
    while (true) {
      passwordLength = prompt(
        "\nPlease enter the number of characters you'd like in your password? \n(Must be between 8-100 characters)\n"
      );
  
      if (passwordLength >= 8 && passwordLength <= 100) {
        alert("\nGreat Choice!" + "\nYour password will have " + passwordLength + " characters");
        break;
      } else {
        alert("Opps! The value you entered is incorrect" + "Click 'OK' to try again");
      }
    }
  
    let userInputNum = parseInt(passwordLength);
    let selectChar = [];
  
    while (true) {
      let includeLowerChar = confirm(
        "\nWould you like your password to include Lowercase? OK for 'YES' Cancel for 'NO'"
      );
      let includeUpperChar = confirm(
        "\nWould you like your password to include Uppercase? OK for 'YES' Cancel for 'NO'"
      );
      let includeNumbers = confirm(
        "\nWould you like your password to include Numbers? OK for 'YES' Cancel for 'NO'"
      );
      let includeSpecialChar = confirm(
        "\nFinally, Would you like your password to include Special Characters? OK for 'YES'Cancel for 'NO'"
      );
  
      if (includeLowerChar) {
        selectChar = selectChar.concat(lowerCasedCharacters);
      }
      if (includeUpperChar) {
        selectChar = selectChar.concat(upperCasedCharacters);
      }
      if (includeNumbers) {
        selectChar = selectChar.concat(numericCharacters);
      }
      if (includeSpecialChar) {
        selectChar = selectChar.concat(specialCharacters);
      }
  
      if (selectChar.length > 0) {
        break;
      } else {
        alert("\nYou must select at least one Character type" + "Try again");
      }
    }
  
    let result = [];
    for (let i = 0; i < selectChar.length; i++) {
      result.push(randomChar(selectChar));
    }

    const password = result.slice(0, userInputNum).join("");
  
    return password;
  }
  
  // Function to generate a random number
  function randomChar(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  //Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  //Write password to the #password input 
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  //Add event listener to generate button 
  generateBtn.addEventListener("click", writePassword);

  