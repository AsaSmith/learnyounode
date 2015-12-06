var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list){
  if(err) throw err;

  // var extension = path.extname(process.argv[3]);
var filteredList= [];
  for (i=0; i <= list.length; i++){
         console.log(path.extname(list[i]));
         console.log(process.argv[3]);

        if (process.argv[3] === path.extname(list[i])){

          // var emptyList = []
          filteredList.push(list[i])


        }
      }
      console.log(filteredList);


  // console.log(process.argv[3], list, extension);
});
