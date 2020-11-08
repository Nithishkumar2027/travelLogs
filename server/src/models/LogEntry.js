const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredNumber = {
  type: Number,
  required: true,
};
const requiredString = {
  type: String,
  required: true,
};

const logEntrySchema = new Schema({
  title: {
    ...requiredString,
  },
  description: String,
  comments: String,
  image: String,
  rating: {
    ...requiredNumber,
    min: 0,
    max: 10,
  },
  latitude: {
    ...requiredNumber,
    min: -90,
    max: 90,
  },
  longitude: {
    ...requiredNumber,
    min: -180,
    max: 180,
  },
  visitDate: {
    required: true,
    type: Date,
  },
}, {
  timestamps: true,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;