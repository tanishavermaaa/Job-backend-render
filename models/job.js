const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  company: { type: String, required: true },
  role: { type: String, required: true },
  status: {
    type: String,
    enum: ['Applied', 'Interview', 'Offer', 'Rejected', 'Selected'],
    default: 'Applied'
  },
  appliedDate: { type: Date, default: Date.now },
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
