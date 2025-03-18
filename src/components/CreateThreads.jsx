import React, { useState } from 'react';
import axios from 'axios';

const CreateThread = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/threads', {
        title,
        content,
      });
      console.log(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <label>
        Content:
        <textarea value={content} onChange={(event) => setContent(event.target.value)} />
      </label>
      <button type="submit">Create Thread</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};


export default CreateThread;
