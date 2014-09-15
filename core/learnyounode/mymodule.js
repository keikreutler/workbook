var fs = require('fs');
var path = require('path');

module.exports = function(dir_name, filename_ext, callback) {
		var filename_array = new Array();
		var filename_filter_array = new Array();

		fs.readdir(dir_name, function(error, list) {
			if(error != null) {
				return callback(error);
			}
			else {
				for(var i=0; i < list.length; i++) {			
					if ('.' + filename_ext == path.extname(list[i])) {
						filename_filter_array[i] = list[i];
					}
				}
			}
			return callback(null, filename_filter_array);
		})
	};
