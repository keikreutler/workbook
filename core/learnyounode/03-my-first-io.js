var fs = require('fs');

var buf = fs.readFileSync('03-test.txt')
var str = buf.toString();

var lines_array = str.split('\n');

console.log(lines_array.length);
