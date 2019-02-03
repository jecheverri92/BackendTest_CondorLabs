const mongoose = require('mongoose')
const Schema = mongoose.Schema
const timestamp = require('mongoose-timestamp')

const Specialty = new Schema({
  name: String,
  createdBy: Number,
  updatedBy: Number,
})
Provider.plugin(timestamp)

const SpecialtiesModel = mongoose.model('specialties', Specialty)

module.exports = SpecialtiesModel