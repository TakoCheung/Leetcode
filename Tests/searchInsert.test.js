const searchInsert = require("../Solutions/searchInsert");

test("nums: [1,3,5,6] | target : 5", () => {
  const arr = [1,3,5,6];
  expect(searchInsert(arr, 5)).toBe(2);
});
test("nums: [1,3,5,6] | target : 2", () => {
  const arr = [1,3,5,6];
  expect(searchInsert(arr, 2)).toBe(1);
});
test("nums: [1,3,5,6] | target : 7", () => {
  const arr = [1,3,5,6];
  expect(searchInsert(arr, 7)).toBe(4);
});