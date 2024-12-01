/**
 *   Maximum Average Subarray I
 * You are given an integer array nums consisting of n elements, and an integer k.
 * Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
 *
 *  Example 1:
 * Input: nums = [1,12,-5,-6,50,3], k = 4
 * Output: 12.75000
 * Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
 *
 * Example 2:
 * Input: nums = [5], k = 1
 * Output: 5.00000
 *
 * @param {*} nums
 * @param {*} k
 * @returns
 */

var findMaxAverage = function (nums, k) {
	let maxAvg = 0;

	let sum = 0;
	//  Avg of Nums upto k set maxAvg
	for (let i = 0; i < k; i++) {
		sum += nums[i];
	}

	function calculateAvg(total) {
		return total / k;
	}

	maxAvg = calculateAvg(sum);
	// console.log('1st MaxAvg:',maxAvg);

	// 2 pointers left,right, Compare against maxAvg
	let right = k;
	let left = 0;
	while (right <= nums.length - 1) {
		sum += nums[right];
		sum -= nums[left];

		// console.log('Sum:',sum);

		maxAvg = Math.max(maxAvg, calculateAvg(sum));

		// console.log('n+1 MaxAvg:',maxAvg);
		left++;
		right++;
	}

	return maxAvg;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
