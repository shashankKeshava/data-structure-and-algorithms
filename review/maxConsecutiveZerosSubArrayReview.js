/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
	// MaxSubArray
	let maxLength = 0;

	// while 0's < k,
	// k++
	// find the max length (right-left+1)

	let zeros = 0;
	let left = (right = 0);
	// R: use for loop
	while (right <= nums.length - 1) {
		if (nums[right] === 0) {
			zeros++;
		}

		// R: too complex check with while loop if zeros>k
		if (left > 0 && nums[left - 1] === 0) {
			zeros--;
			left++;
		}

		console.log('Zeros:', zeros);

		//R: if not needed
		if (zeros <= k) {
			maxLength = Math.max(maxLength, right - left + 1);
			console.log(
				'left: ' + left + 'right: ' + right + 'maxLength: ' + maxLength
			);
			right++;
		}
	}

	return maxLength;

	// When K is max
	// while (0's < k )
	// left ++
	// right ++
	// until  0's < K satisfied: recalculateMaxArray

	// recalculateMaxArray
};
