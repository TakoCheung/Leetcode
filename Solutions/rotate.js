var rotate = function (matrix) {
	const n = matrix.length;

	// Transpose the matrix
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
		}
	}
	console.log(matrix)

	// Reverse each row
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n / 2; j++) {
			[matrix[i][j], matrix[i][n - 1 - j]] = [
				matrix[i][n - 1 - j],
				matrix[i][j],
			];
		}
	}
	return matrix;
};

module.exports = rotate;
