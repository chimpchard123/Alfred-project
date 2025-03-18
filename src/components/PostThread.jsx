import React, { useState } from "react";
import { createNewThread } from "../api/api.js";
function PostThread() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const newThread = await createNewThread(title, content); // Call the imported function
      console.log('Thread posted:', newThread);
      setTitle('');
      setContent('');
    } catch (error) {
      setError(error.message); // Show the error in the UI
      console.error('Error posting thread:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Thread</h2>
      <form onSubmit={handleSubmit}>
        {/* Add your form fields here */}
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Create Thread</button>
      </form>
    </div>
  );
}

export default PostThread;