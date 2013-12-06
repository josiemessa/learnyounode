var sum = process.argv.slice(2).reduce(function(ac,x) {
	return ac+(+x);
}, 0);
console.log(sum);