var mymodule = require('./mymodule.js');

var dir_name = process.argv[2];
var file_ext = process.argv[3];

mymodule(dir_name, file_ext, function(err, list) {
  if (err) {
   throw err;
  }
  else list.forEach(function (file) {
   console.log(file);
  })
});
