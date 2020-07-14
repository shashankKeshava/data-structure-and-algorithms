/* Problem statement: https://leetcode.com/explore/featured/card/google/59/array-and-strings/3052/ */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
	var rows = matrix.length;
	var columns = matrix[0].length;

	for (var i = 0; i < rows; i++) {
		for (var j = i; j < columns; j++) {
			var temp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}

	for (var i = 0; i < rows; i++) {
		matrix[i] = matrix[i].reverse();
	}
};
