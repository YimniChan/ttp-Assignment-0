function pairSum(nums, target) {
  // Insert code here;
  var count =0;
  if (nums.length<2){
	throw ("Array too small, unable to run this function.");
  }
  else{
	for (var i=0;i<nums.length;i++){
		for (var j=0;j<nums.length;j++)
			if(nums[i]+nums[j]==target){
				count++;
			}
	}  
  }
  if (count>0){
	  return true;}
  else {
	  return false;}
}

// Do not edit this line;
module.exports = pairSum;