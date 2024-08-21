/**
* @description: Return the ideal interview days in a week excluding weekends.
* The gap defines the buffer between the days.
 */

function interviewIdealDay(days, gap) {
	const weekend = ['Saturday', 'Sunday'];

	let j;
	for (let i = 0; i <= days.length - 1; i++) {
		j = i + gap;

		if (j > days.length - 1) {
			j -= days.length;
		}

		if (!weekend.includes(days[i]) && !weekend.includes(days[j])) {
			console.log(`Day 1: ${days[i]},Days 2: ${days[j]}`);
		}
	}
}

interviewIdealDay(
	[
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	],
	4
);
