/* Problem Statement: https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays */

function hourglassSum(arr) {
	var max_sum = -69;
	var rows = arr.length;
	var columns = arr[0].length;
	for (var i = 0; i < rows - 2; i++) {
		for (var j = 0; j < columns - 2; j++) {
			var sum =
				arr[i][j] +
				arr[i][j + 1] +
				arr[i][j + 2] +
				arr[i + 1][j + 1] +
				arr[i + 2][j] +
				arr[i + 2][j + 1] +
				arr[i + 2][j + 2];

			if (sum > max_sum) max_sum = sum;
		}
	}
	return max_sum;
}
