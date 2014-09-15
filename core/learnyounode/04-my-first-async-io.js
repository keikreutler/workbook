var fs = require('fs');

fs.readFile('03-test.txt', 'utf-8', function(error, buffObj) {
		// console.log(error);
		if(error != null) {
			console.log(error);
			return;
		}
		var lines_array = buffObj.split('\n');
		console.log(lines_array.length);
	});

