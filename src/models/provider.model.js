var mongoose = require('mongoose');
const Schema = mongoose.Schema
const timestamp = require('mongoose-timestamp')

const Provider = new Schema({
  firstName: String,
  lastName: String,
  middleName: String,
  email: String,
  specialty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Specialty'
  },
  projectedStartDate: {
    type: Date,
    default: Date.now
  },
  employerId: Number,
  providerType: String,
  staffStatus: String,
  assignedTo: Number,
  status: String,
  createdBy: Number,
  updatedBy: Number,
  created: {
    type: Date,
    default: Date.now
  }

})

Provider.plugin(timestamp)

module.exports = mongoose.model('providers',Provider);