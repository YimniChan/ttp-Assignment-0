function isPalindrome(word) {
  // Insert code here;
	var chack = word.length-1;
  for (var i = 0; i < word.length; i++){
    if (word[i] !== word[chack]) {
		chack--;
		return false;
    }
	else
		return true;
  }	
}

// Do not edit this line;
module.exports = isPalindrome;