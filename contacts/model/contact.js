const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	middleName: {
		type: String,
		default: ""
	},
	sirName: {
		type: String,
		default: ""
	},
	contact: {
		type: String,
		minlength: 10,
		required: true
	},
	category : {
		type : String
	}
});

const Contact = mongoose.model("contact", contactSchema);

module.exports = { Contact };
