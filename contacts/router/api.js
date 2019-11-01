const Router = require("express").Router();
const { Contact } = require("../model/contact");

Router.get("/contact", async function(req, res) {
	const result = await Contact.find();
	res.send(result);
});

Router.post("/contact", async function(req, res) {
	const result = await new Contact({ ...req.body }).save();
	res.send(result);
});

Router.get("/contact/:id", async function(req, res) {
	const result = await Contact.findById(req.params.id);
	res.send(result);
});

Router.post("/contact/:id", async function(req, res) {
	const result = await Contact.findByIdAndUpdate(
		{ _id: req.params.id },
		{
			...req.body
		},
		{
			new: true
		}
	);
	res.send(result);
});

Router.put("/contact", async function(req, res) {
	const result = await Contact.findByIdAndUpdate(
		{ _id: req.body._id },
		{
			...req.body
		},
		{
			new: true
		}
	);
	res.send(result);
});

Router.delete("/contact/:id", async function(req, res) {
	const result = await Contact.findByIdAndRemove(req.params.id);
	res.send(result)
});

module.exports = Router;

// juliet seizer antony  mar jata // - tone samjho find karo prunounciation
// juliet seizer antony  mar jata // - tone samjho find karo prunounciation
// antony speech
