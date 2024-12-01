/**
 * A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.

Example 2:

Input: sentence = "leetcode"
Output: false

 */

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
	const panagram = new Set(sentence);

	// Size is a accessor property of set
	if (panagram.size == 26) {
		return true;
	}

	return false;
};

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));
console.log(checkIfPangram('leetcode'));
