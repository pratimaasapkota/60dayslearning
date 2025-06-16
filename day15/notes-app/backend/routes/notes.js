const express = require('express');
const router = express.Router();

let notes = [
  { id: 1, text: "Learn Node.js" },
  { id: 2, text: "Build a React + Node app" }
];

router.get('/', (req, res) => {
  res.json(notes);
});

router.post('/', (req, res) => {
  const { text } = req.body;
  const newNote = { id: Date.now(), text };
  notes.push(newNote);
  res.status(201).json(newNote);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  notes = notes.filter(note => note.id !== id);
  res.status(204).send();
});

module.exports = router;
