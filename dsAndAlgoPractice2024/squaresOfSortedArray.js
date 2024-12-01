/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	let i = 0,
		j = nums.length - 1;

	while (i <= j) {
		if (i == j) {
			nums[i] = Math.pow(nums[i], 2);
		} else {
			nums[i] = Math.pow(nums[i], 2);
			nums[j] = Math.pow(nums[j], 2);
		}
		i++;
		j--;
	}

	function swap(i, j) {
		let temp = nums[i];
		nums[i] = nums[j];
		nums[j] = temp;
	}

	for (let left = 0; left <= nums.length - 1; left++) {
		for (let right = left + 1; right <= nums.length - 1; right++) {
			if (nums[left] > nums[right]) {
				swap(left, right);
			}
		}
	}

	return nums;
};

console.log(sortedSquares([-7, -3, 2, 3, 11]));
