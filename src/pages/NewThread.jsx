import React, { useState } from 'react';

function NewThreadForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the form from refreshing the page

    const newThread = {
      title,
      content,
    };

    // Make the fetch request to POST the new thread to the backend
    fetch('http://localhost:5001/Threads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newThread),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('New thread created:', data);
        setTitle('');  // Clear the form
        setContent('');
        // Optionally, update the state or the UI to show the new thread
      })
      .catch((error) => {
        console.error('Error creating thread:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Thread title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Thread content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Post Thread</button>
    </form>
  );
}

export default NewThreadForm;




