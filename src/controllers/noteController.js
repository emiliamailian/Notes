const Note = require('../models/Note');

const createNote = async (req, res) => {
  const { title, text, createdBy } = req.body;

  try {
    const note = new Note({
      title,
      text,
      createdBy,
    });

    await note.save(); 
    res.status(201).json(note); 
  } catch (error) {
    res.status(400).json({ message: 'Error creating note' });
  }
};

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find(); 
    res.status(200).json(notes); 
  } catch (error) {
    res.status(400).json({ message: 'Error fetching notes' });
  }
};

const getNoteById = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findById(id); 
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching note' });
  }
};

const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, text, createdBy } = req.body;

  try {
    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    note.title = title || note.title;
    note.text = text || note.text;
    note.createdBy = createdBy || note.createdBy;
    note.updatedAt = Date.now();

    await note.save();
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ message: 'Error updating note' });
  }
};

const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json({ message: 'Note deleted' });
  } catch (error) {
    console.error('Error deleting note:', error);
    res.status(400).json({ message: 'Error deleting note' });
  }
};

module.exports = {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
};