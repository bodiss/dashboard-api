const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const DevicesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    trim: true
  },
}, {
  strict: false
});

const Device = mongoose.model('Device', DevicesSchema);

module.exports = Device;
