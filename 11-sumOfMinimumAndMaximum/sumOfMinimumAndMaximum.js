function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var sum=0;
  var max = nums[0]; // Initialize maximum element 
  var min = nums[0]; // Initialize minimum element 
	
	//find the max element
   for (var i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
		max = nums[i];}
   }	
   
   	//find the min element
   for (var i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
		min = nums[i];}
   }	
   sum = max + min;
   return sum;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;