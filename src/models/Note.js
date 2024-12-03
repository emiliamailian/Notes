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
  },
  {
    timestamps: true, 
  }
);

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
