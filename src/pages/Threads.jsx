import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Threads() {
  const { id } = useParams(); // Get thread ID from URL
  const [thread, setThread] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError('Thread ID is required');
      return;
    }

    fetch(`http://localhost:5001/Threads/${id}`)
      .then((response) => response.json())
      .then((data) => setThread(data))
      .catch((error) => setError(error.message));
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!thread) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Thread {thread.id}</h1>
      <p>{thread.title}</p>
      <p>{thread.content}</p>
    </div>
  );
}
export default Threads;


