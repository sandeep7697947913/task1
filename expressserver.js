const { app } = require('./contacts/index')

app.listen(7000, function() {
	console.log("Contact app listening on port 7000 !");
});
