import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/notes')
      .then(res => setNotes(res.data))
      .catch(err => console.error(err));
  }, []);

  const addNote = () => {
    if (!text.trim()) return;
    axios.post('http://localhost:5000/api/notes', { text })
      .then(res => setNotes(prev => [...prev, res.data]))
      .catch(err => console.error(err));
    setText('');
  };

  const deleteNote = (id) => {
    axios.delete(`http://localhost:5000/api/notes/${id}`)
      .then(() => setNotes(prev => prev.filter(note => note.id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Notes App</h1>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter note" 
      />
      <button onClick={addNote}>Add</button>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            {note.text}
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
