var fs = require('fs');

fs.readFile(process.argv[2], function(err, data){
  if(err)throw err;
  var string = data.toString();
  var splString = string.split('\n')
  console.log(splString.length - 1);
});
