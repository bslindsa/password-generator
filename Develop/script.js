// Variables and arrays set to use in the functions.
var generateBtn = document.querySelector("#generate");
var spclChar = ["!","@","#","$","%","&","^","(",")","*"];
var alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var bigAlph = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var num10 = ["0","1","2","3","4","5","6","7","8","9"]
var includeSpecial;
var includeLower;
var includeUpper;
var includeNumber;

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Prompt user to specify criteria
  let special = window.confirm("Will your password include special characters? \nOk for 'yes'\nCancel for 'no':");
  let lowerAlph = window.confirm("Will your password include lower-case letters? \nOk for 'yes'\nCancel for 'no':");
  let upperAlph = window.confirm("Will your password include upper-case letters? \nOk for 'yes'\nCancel for 'no':");
  let nums = window.confirm("Will your password include numbers? \nOk for 'yes'\nCancel for 'no':");
  
  // Confirm that at least one criteria is included.
  if (!special && !lowerAlph && !upperAlph && !nums) {
    window.alert("Password must include at least one criteria.")
    special = window.confirm("Will your password include special characters? \nOk for 'yes'\nCancel for 'no':");
    lowerAlph = window.confirm("Will your password include lower-case letters? \nOk for 'yes'\nCancel for 'no':");
    upperAlph = window.confirm("Will your password include upper-case letters? \nOk for 'yes'\nCancel for 'no':");
    nums = window.confirm("Will you password include numbers? \nOk for 'yes'\nCancel for 'no':");
  }

  // Confirm that the number of characters in the password is at least 8 characters and no more than 128 characters.
  // If not, the user will be prompted to enter another number.
  let passwordLength = window.prompt("How many characters will be in your password? \n*Password length must be at least 8 characters and at most 128 characters.");
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("How many characters will be in your password? \n*Password length must be at least 8 characters and at most 128 characters.");
  }

  // set blank strings and arrays to use for the final password generation
  var password = "";
  var passSet = [];
  
  if (special) {
    var validSpcl = " special characters, ";
    passSet = passSet.concat(spclChar);
  }
  
  if (lowerAlph) {
    var validLower = "lower-case letters, ";
    passSet = passSet.concat(alph);
  }
  
  if (upperAlph) {
    var validUpper = "upper-case letters, ";
    passSet = passSet.concat(bigAlph)
  }
  
  if (nums) {
    var validNums = "numbers, ";
    passSet = passSet.concat(num10);
  }
  
  window.alert("Your password will contain: " + validSpcl + validLower + validUpper + validNums + "and will be a total of " + passwordLength + " characters.");

  // Generate password
  for (i = 0; i < passwordLength; i++) {
    password += passSet[Math.floor(Math.random()*passSet.length)];
  }

  // If generated password does not contain desired criteria, then regenerate the password.
  if (special && !spclChar.some(i => password.includes(i)) ||
    lowerAlph && !alph.some(i => password.includes(i)) ||
    upperAlph && !bigAlph.some(i => password.includes(i)) ||
    nums && !num10.some(i => password.includes(i))
    ) {
      password = "";
    for (i = 0; i < passwordLength; i++) {
      password += passSet[Math.floor(Math.random()*passSet.length)];
    }
  }

  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
