// External Dependancies
const mongoose = require('mongoose')

const ownerSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String
})

module.exports = mongoose.model('Owner', ownerSchema)
