const twoSum = require('../Solutions/twoSum')

test('nums: [2,7,11,15] success', ()=>{
  const arr = [2,7,11,15]
  expect(twoSum(arr, 9)).toEqual([0,1]);
  expect(twoSum(arr, 26)).toEqual([2,3]);
})

test('nums: [-1,-2,11,15] success', ()=>{
  const arr = [-1,-2,11,15]
  expect(twoSum(arr, -3)).toEqual([0,1]);
  expect(twoSum(arr, 9)).toEqual([1,2]);
})

test('nums: [] success', ()=>{
  const arr = []
  expect(twoSum(arr, -3)).toEqual(null);
  expect(twoSum(arr, 9)).toEqual([]);
})