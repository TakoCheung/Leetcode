const fourSum = require('../Solutions/fourSum')

test('nums: [1,0,-1,0,-2,2] | target: 0', ()=>{
  const arr = [1,0,-1,0,-2,2]
  expect(fourSum(arr, 0)).toEqual(expect.arrayContaining([[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]));
})

test('nums: [2,2,2,2] | target: 8', ()=>{
  const arr = [2,2,2,2]
  expect(fourSum(arr, 8)).toEqual([[2,2,2,2]]);
})