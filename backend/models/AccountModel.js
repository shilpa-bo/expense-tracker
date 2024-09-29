const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

// Define a Mongoose Model that represents a collection in Mongo DB database
module.exports = mongoose.model("accounts", AccountSchema);
