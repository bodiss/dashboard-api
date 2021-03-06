const mongoose = require('mongoose');

const DevicesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    trim: true
  },
}, {
  strict: false,
  timestamps: true,
});

const Device = mongoose.model('Device', DevicesSchema);

module.exports = Device;
