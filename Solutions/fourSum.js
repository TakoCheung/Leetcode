const util = require("../Utils/combinations");

var fourSum = function (nums, target) {
	const combinations = util.getCombinations(nums, 4);
	// console.log(indexes)
	const ret = [];
	for (const c of combinations) {
		// console.log(c)
		if (c[0] + c[1] + c[2] + c[3] == target) {
			// console.log(c)
			ret.push(c.sort((a, b) => a - b));
		}
	}
	// console.log(ret)
	return ret.sort((a, b) => a - b);
};

function fourSumFromThreeSum(nums, target){
	const results = [];
	if (nums.length < 4) return results;
	// nums.sort((a, b) => a - b); // Step 1: Sort the array
	for (let j = 0; j <= nums.length - 4; j++) {
		for (let i = j; i <= nums.length - 3; i++) {
			// Step 2: Fixed pointer
			// if (i > 0 && nums[i] === nums[i - 1]) continue; // Avoid duplicates

			let left = i - 1;
			let right = nums.length - 1;

			while (left < right) {
				const sum = nums[i] + nums[left] + nums[right] + nums[j];

				if (sum === target) {
					// Found a triplet
					results.push( nums[i], nums[left], [nums[j], nums[right]]);

					// Move both pointers to avoid duplicates
					// while (left < right && nums[left] === nums[left + 1]) left++;
					// while (left < right && nums[right] === nums[right - 1]) right--;

					left++;
					right--;
					// } else if (sum < 0) {
					// 	left++; // Increase the sum
					// } else {
					// 	right--; // Decrease the sum
					// }
				}
			}
		}
	}
}

module.exports = {
  fourSum: fourSum,
	fourSumFromThreeSum, fourSumFromThreeSum
};

