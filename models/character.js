var mongoose = require('mongoose');

var characterSchema = new mongoose.Schema({
  characterId: { type: String, unique: true, index: true },
  name: String,
  type: String,
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
  reports: { type: Number, default: 0 },
  random: { type: [Number], index: '2d' },
  voted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Character', characterSchema);