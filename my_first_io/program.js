var fs = require('fs');
console.log(process.argv)
var filePath = process.argv[2];

var buffer = fs.readFileSync(filePath);

var string = buffer.toString();

var split = string.split('\n');

// console.log(split);

console.log(split.length - 1);
