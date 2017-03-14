/* function reverseString takes in a string argument and returns the reverse 
of the string provided.
It returns true if string is a palindrome.
It returns null, if string is empty
It returns 'invalid input' for all other data types*/

function reverseString(str){
  //checks for empty string
  if(str.length === 0){
    return null;
  }
  //checks for other data types apart from string
  if (typeof str !== 'string'){
    return 'Invalid input';
}
 // converts string into an array of its letters and assigns it to variable 
var arrWord = str.split('');
// reverses the array
var arrReverse = arrWord.reverse();
//strips the elements of the quotation marks
var strReverse =arrReverse.join('').toString();


//check for palindromes
var isPalindrome = true;
if(strReverse === str){
  return isPalindrome;
}
return strReverse;
}


module.exports = reverseString;