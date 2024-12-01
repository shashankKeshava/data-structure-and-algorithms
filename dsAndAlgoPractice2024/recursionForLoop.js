/* Implement for loop using recursion */

function forLoopRecursion(i) {
	if (i > 10) {
		return;
	}
	console.log(i);
	forLoopRecursion(i + 1);
	return;
}

forLoopRecursion(1);
