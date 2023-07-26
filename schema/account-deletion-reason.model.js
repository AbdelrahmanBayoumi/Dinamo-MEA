const mongoose = require('mongoose');

const accountDeletionReasonSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reasonText: { type: String }
});

module.exports = mongoose.model('AccountDeletionReason', accountDeletionReasonSchema);
