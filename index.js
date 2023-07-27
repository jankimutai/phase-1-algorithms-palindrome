function  isPalindrome(word) {
  
  let newWord = word.split('')
  let reverseNewWord = newWord.reverse()
  let joinedWord = reverseNewWord.join('');
  if (word === joinedWord){
    return (true);
  }else{
    return (false)
  }





  // Write your algorithm here
  // isPalindrome function that takes a string as input
  // returns true if the string is a palindrome and false otherwise
  //The function uses the split, reverse, and join methods to reverse the input string and compare it with the original string.
      

}

/* 
  Add your pseudocode here
      //Split the input string into an array of characters using the split method.
      // Reverse the array of characters using the reverse method.
      //Join the reversed array of characters back into a string using the join method.
      //Compare the original input string with the reversed string.
      //If the two strings are equal, return true. Otherwise, return false.

*/

/*
  Add written explanation of your solution here
      
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
console.log("Expecting: true");
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("a")); // true
console.log("Expecting: false");
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("ab")); // false

}

module.exports = isPalindrome;
