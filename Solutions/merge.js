/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // Sort intervals by starting times
	intervals.sort((a, b) => a[0] - b[0]);

	const merged = [];
	for (let i = 0; i < intervals.length; i++) {
		// If the list of merged intervals is empty or if the current
		// interval does not overlap with the previous, simply append it.
		if (merged.length === 0 || merged[merged.length - 1][1] < intervals[i][0]) {
			merged.push(intervals[i]);
		} else {
			// Otherwise, there is overlap, so we merge the current and previous
			// intervals by updating the end time of the previous interval if needed.
			merged[merged.length - 1][1] = Math.max(
				merged[merged.length - 1][1],
				intervals[i][1]
			);
		}
	}

	return merged;
};

module.exports = merge