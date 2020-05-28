class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
	var begin = 0;
	var end  = nums.length-1;
	var found = false;
	
	while (begin<=end && found == false){
		var mid = Math.floor(begin+end/2);
		if (nums[mid]==target){
			found = true;
			}
		else if(nums[mid]>target){
			//mid of num bigger than target, means target on the left side
			end = mid-1;
		}
		else{
			//mid of num small than target,means target may on the right side
			begin=mid+1;
		}	
	}
	return found;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;