// Read file with promises with utf8 characters as default
function readFile(path,encoding) {
	return new Promise((resolve, reject) => {
		if(typeof encoding == 'undefined' || encoding == null) {
			encoding = 'utf8';
		}
		fs.readFile(path, encoding, (err, data) => {
			if (err) {
				if (err.code !== 'ENOENT') {
					return reject(err);
				} else {
					return resolve(null);
				}
			}

			return resolve(data);
		});
	});
}
