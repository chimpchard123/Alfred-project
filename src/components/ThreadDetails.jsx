// In src/components/ThreadDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ThreadDetail() {
  const { id } = useParams(); // Get the thread ID from the URL
  const [thread, setThread] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch thread by ID from the backend
    async function fetchThread() {
      const response = await fetch(`http://localhost:5001/Threads/${id}`);
      if (response.ok) {
        const data = await response.json();
        setThread(data);
      } else {
        console.error('Failed to fetch thread');
        navigate('/'); // Navigate back to home if thread not found
      }
    }

    fetchThread();
  }, [id, navigate]);

  // Show a loading message while waiting for the data
  if (!thread) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{thread.title}</h1>
      <p>{thread.content}</p>
      <button onClick={() => navigate('/')}>Back to Threads</button>
    </div>
  );
}

export { ThreadDetail };