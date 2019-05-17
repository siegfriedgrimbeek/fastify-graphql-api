// External Dependancies
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const serviceSchema = new mongoose.Schema({
	car_id: ObjectId,
	name: String,
	date: String
})

module.exports = mongoose.model('Service', serviceSchema)
