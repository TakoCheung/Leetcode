/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
  for (let index = 0; index < nums.length; index++) {
    // const left = nums.reduce(
    //   (accumulator, currentValue, i) => {
    //     if(i < index){
    //       accumulator = accumulator + currentValue
    //     }
    //     else{
    //       return accumulator
    //     }
    //   }
    // )
    // const right = nums.reduceRight(
    //   (accumulator, currentValue, i) => {
    //     if(i > index){
    //       accumulator = accumulator + currentValue
    //     }
    //     else{
    //       return accumulator
    //     }
    //   }
    // )
    // let right = 0
    // for (let i = index+1; i < nums.length; i++) {
    //   right += nums[i]
    // }
    // let left = 0
    // for (let i = index-1; i >= 0; i--) {
    //   left += nums[i]
    // }
    let left = 0
    let right = 0
    for (let i = 0; i < nums.length; i++) {
      if(i < index)
        left += nums[i]
      else if(i > index){
        right += nums[i]
      }
    }
    
    // console.log(left,right)
    if(left == right)
      return index
  }
  return -1
};

module.exports = findMiddleIndex