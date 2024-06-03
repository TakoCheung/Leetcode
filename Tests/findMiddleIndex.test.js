const testFunc = require("../Solutions/findMiddleIndex");

describe("findMiddleIndex", () => {
	test("nums: [2,3,-1,8,4] ", () => {
		const arr = [2, 3, -1, 8, 4];
		expect(testFunc.findMiddleIndex(arr)).toBe(3);
	});

	test("nums: [1,-1,4] ", () => {
		const arr = [1, -1, 4];
		expect(testFunc.findMiddleIndex(arr)).toBe(2);
	});
});

describe.skip("findMiddleIndexWithReduce", () => {
	test("nums: [2,3,-1,8,4] ", () => {
		const arr = [2, 3, -1, 8, 4];
		expect(testFunc.findMiddleIndexWithReduce(arr)).toBe(3);
	});

	test("nums: [1,-1,4] ", () => {
		const arr = [1, -1, 4];
		expect(testFunc.findMiddleIndexWithReduce(arr)).toBe(2);
	});
});
