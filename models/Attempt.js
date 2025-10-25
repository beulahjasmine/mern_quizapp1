const mongoose = require('mongoose');

const attemptSchema = new mongoose.Schema({
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  answers: [{
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    selectedIndex: Number
  }],
  score: { type: Number, default: 0 },
  maxScore: { type: Number, default: 0 },
  finishedAt: Date
}, { timestamps: true });

module.exports = mongoose.model('Attempt', attemptSchema);
