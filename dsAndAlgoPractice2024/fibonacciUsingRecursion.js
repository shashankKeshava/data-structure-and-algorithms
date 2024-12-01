/**
 * Fibonacci series using recursion
 * F(n)=F(n-1)+F(n-2)
 *
 * @param {*} n
 * @returns
 */

let sum = 0;
function fibonacciUsingRecursion(n) {
	// Base case
	if (n <= 1) {
		return n;
	}
	return fibonacciUsingRecursion(n - 1) + fibonacciUsingRecursion(n - 2);
}

console.log(fibonacciUsingRecursion(10));
