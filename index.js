function isPalindrome(string) {
  let cleanedString = string.toLowerCase();
  for (let i = 0; i < cleanedString.length; i++) {
      if (cleanedString[i] !== cleanedString[cleanedString.length - 1 - i]) {
          return false;
      }
  }
  return true;
}


// code tests
console.log(isPalindrome("abba")) 
console.log(isPalindrome("racecar")) 
console.log(isPalindrome("a")) 
console.log(isPalindrome("robot"))
console.log(isPalindrome("ab")) 