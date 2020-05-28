function frequencyCounter(word) {
  // Insert code here;

  var count={};
//get unique Words in word
	for (var i=0;i < word.length;i++){
		
		var uniqueWords= word.charAt(i)
      if (count[uniqueWords]) {
        count[uniqueWords]++;
      }
	  else 
		  count[uniqueWords] = 1;
    } 
	return count;
}

// Do not edit this line;
module.exports = frequencyCounter;
