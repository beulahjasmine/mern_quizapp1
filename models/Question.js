const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  options: [{ type: String }],
  correctIndex: { type: Number, required: true },
  marks: { type: Number, default: 1 }
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);
