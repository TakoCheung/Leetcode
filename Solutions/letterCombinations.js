const util = require('../Utils/combinations')

var letterCombinations = function (digits) {
	if (!digits.length) {
		return [];
	}

  util.setN({
		2: "abc",
		3: "def",
		4: "ghi",
		5: "jkl",
		6: "mno",
		7: "pqrs",
		8: "tuv",
		9: "wxyz",
	})
  util.setC(digits)

	return util.backtrack(0, "");
};

module.exports = letterCombinations;
