
const { Schema, model } = require("mongoose");


const contactShema = new Schema({
     username: {type: String, required: true},
     email: {type: String, required: true},
     message: {type: String, required: true},
});

//*create a model or a colletion
const Contact = new model("Contact", contactShema);
module.exports = Contact;