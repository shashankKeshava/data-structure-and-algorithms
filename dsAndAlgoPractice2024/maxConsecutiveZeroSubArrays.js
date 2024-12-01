/* Max Consecutive Ones III

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined. */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
	let maxLength = 0;
	let zeros = 0;
	let left = 0;

	for (let right = 0; right < nums.length; right++) {
		// Increment zeros count if the current element is 0
		if (nums[right] === 0) {
			zeros++;
		}

		// Shrink the window until zeros <= k
		while (zeros > k) {
			if (nums[left] === 0) {
				zeros--;
			}
			left++;
		}

		// Update the maximum length of the window
		maxLength = Math.max(maxLength, right - left + 1);
	}

	return maxLength;
};
