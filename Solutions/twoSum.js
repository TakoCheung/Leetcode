//https://leetcode.com/problems/two-sum/

function twoSum(nums, target) {
  let pointA = 0;
  let pointB = nums.length-1;
  for(let pointA = 0; pointA < nums.length - 1; pointA++ ){
      for(let pointB = pointA+1; pointB < nums.length; pointB++ ){
          if(nums[pointA] + nums[pointB] == target) return [pointA, pointB]
      }
  }
};

module.exports = twoSum;