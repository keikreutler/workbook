var fs = require('fs');

module.exports = function(dir_name, filename_ext, callback) {
		var filename_array = new Array();
		var filename_fitler_array = new Array();

		fs.readdir(dir_name, function(error, list) {
			if(error != null) {
				console.log(error);
				return;
			}
			else {
				for(var i=0; i < list.length; i++) {			
					if ('.' + filename_ext == path.extname(list[i])) {
						filename_filter_array[i] = list[i];
					}
				}
				return callback(null, filename_filter_array);
			}
		}
	});
