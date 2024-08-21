// Single thread
function doSomething() {
	console.log('A');
	const b = new Promise(function (resolve, reject) {
		setTimeout(() => {
			resolve('Promise resolved');
		});
	});
	b.then((response) => console.log(response));
	console.log('C');
}

doSomething();
