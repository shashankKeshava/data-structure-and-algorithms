/**
 * Find the path in the pyramid with maximum sum
 * Solution: [ 2, 9, 6, 9 ]
 */
function findMaxPathInPyramid() {
	var pyramid = [[2], [3, 9], [4, 5, 6], [7, 8, 9, 8]];

	var maxPath = [];
	for (var i = 0; i <= pyramid.length - 1; i++) {
		maxPath.push(Math.max(...pyramid[i]));
	}

	console.log(maxPath);
}

findMaxPathInPyramid();
