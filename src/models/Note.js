const mongoose = require('mongoose');

const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true, 
    },
    text: {
      type: String,
      required: true, 
    },
    createdBy: {
      type: String,
      required: true, 
    },
    createdAt: {
      type: Date,
      default: Date.now, 
    },
    updatedAt: {
      type: Date,
      default: Date.now, 
    },
  },
  {
    timestamps: true, 
  }
);

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
