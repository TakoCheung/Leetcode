//https://leetcode.com/problems/two-sum/

//Time: O(n^2) Space: O(1)
// function twoSum(nums, target) {
// 	let pointA = 0;
// 	let pointB = nums.length - 1;
// 	for (let pointA = 0; pointA < nums.length - 1; pointA++) {
// 		for (let pointB = pointA + 1; pointB < nums.length; pointB++) {
// 			if (nums[pointA] + nums[pointB] == target) return [pointA, pointB];
// 		}
// 	}
// }

//Time: O(n) Space: O(1)
var twoSum = function (arr, target) {
	const nums = {};

	for (let i = 0; i < arr.length; i++) {
		if (target - arr[i] in nums) {
			return [nums[target - arr[i]], i];
		}

		nums[arr[i]] = i;
	}

	return [-1, -1];
};

module.exports = twoSum;
