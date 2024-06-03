const fourSum = require("../Solutions/fourSum");

describe("fourSum", () => {
	test("nums: [1,0,-1,0,-2,2] | target: 0", () => {
		const arr = [1, 0, -1, 0, -2, 2];
		expect(fourSum.fourSum(arr, 0)).toEqual(
			expect.arrayContaining([
				[-2, -1, 1, 2],
				[-2, 0, 0, 2],
				[-1, 0, 0, 1],
			])
		);
	});

	test("nums: [2,2,2,2] | target: 8", () => {
		const arr = [2, 2, 2, 2];
		expect(fourSum.fourSum(arr, 8)).toEqual([[2, 2, 2, 2]]);
	});

	test("nums: [] | target: 8", () => {
		const arr = [];
		expect(fourSum.fourSum(arr, 8)).toEqual([]);
	});
});

describe.skip("fourSumFromThreeSum", () => {
	test("nums: [1,0,-1,0,-2,2] | target: 0", () => {
		const arr = [1, 0, -1, 0, -2, 2];
		expect(fourSum.fourSumFromThreeSum(arr, 0)).toEqual(
			expect.arrayContaining([
				[-2, -1, 1, 2],
				[-2, 0, 0, 2],
				[-1, 0, 0, 1],
			])
		);
	});

	test("nums: [2,2,2,2] | target: 8", () => {
		const arr = [2, 2, 2, 2];
		expect(fourSum.fourSumFromThreeSum(arr, 8)).toEqual([[2, 2, 2, 2]]);
	});

	test("nums: [] | target: 8", () => {
		const arr = [];
		expect(fourSum.fourSumFromThreeSum(arr, 8)).toEqual([]);
	});
});
