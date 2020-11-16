const mongoose = require('mongoose');

const VocabularySchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    trim: true
  },
  label: {
    type: String,
    required: true,
    trim: true
  },
}, {
  strict: true,
});

const Vocabulary = mongoose.model('Vocabulary', VocabularySchema);

module.exports = Vocabulary;
