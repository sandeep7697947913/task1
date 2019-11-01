const mongoose = require("mongoose");

function mongoConnect() {
	let url = "mongodb://localhost/Contacts";
	mongoose.connect(url, function(err, database) {
		if (err) throw err;
		// console.log("sandeep");
		// console.log(err);
		console.log("coonected to Contacts");
	});
}

module.exports = mongoConnect;
