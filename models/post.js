const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }, // fixed "type"
  date: {
    type: Date,
    default: Date.now
  },
  content: { type: String },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }] // lowercase "likes" is cleaner
});

module.exports = mongoose.model('Post', postSchema);
