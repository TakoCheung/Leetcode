const twoSum = require('../Solutions/fourSum')

test('nums: [1,0,-1,0,-2,2] | target: 0', ()=>{
  const arr = [1,0,-1,0,-2,2]
  expect(twoSum(arr, 9)).toEqual([[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]);
})
