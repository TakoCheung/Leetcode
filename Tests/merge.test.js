const testFunc = require("../Solutions/merge");

describe("merge", () => {
	test("intervals: [[1,3],[2,6],[8,10],[15,18]] ", () => {
		const intervals = [[1,3],[2,6],[8,10],[15,18]];
		expect(testFunc(intervals)).toEqual([[1,6],[8,10],[15,18]]);
	});

	test("intervals: [[1,4],[4,5]] ", () => {
		const intervals = [[1,4],[4,5]];
		expect(testFunc(intervals)).toEqual([[1,5]]);
	});
});