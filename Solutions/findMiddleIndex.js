//https://leetcode.com/problems/find-the-middle-index-in-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
	for (let index = 0; index < nums.length; index++) {
		let left = 0;
		let right = 0;
		for (let i = 0; i < nums.length; i++) {
			if (i < index) left += nums[i];
			else if (i > index) {
				right += nums[i];
			}
		}

		// console.log(left,right)
		if (left == right) return index;
	}
	return -1;
};

const findMiddleIndexWithReduce = function (nums) {
	for (let index = 0; index < nums.length; index++) {
		let left = nums.reduce((accumulator, currentValue, i) => {
			if (i < index) {
				accumulator = accumulator + currentValue;
			} else {
				return accumulator;
			}
		});
		let right = nums.reduceRight((accumulator, currentValue, i) => {
      // console.log("right: ",accumulator, currentValue, i);
			if (i > index) {
				accumulator = accumulator + currentValue;
			} else {
				return accumulator;
			}
		});
    // console.log(left, right);
    if (left == right) return index;
	}
	
	return -1;
};

module.exports = {
	findMiddleIndex: findMiddleIndex,
	findMiddleIndexWithReduce: findMiddleIndexWithReduce,
};
