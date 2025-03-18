// In src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    // Fetch all threads
    async function fetchThreads() {
      const response = await fetch('http://localhost:5001/Threads');
      const data = await response.json();
      setThreads(data);
    }

    fetchThreads();
  }, []);

  return (
    <div>
      <h1>Threads</h1>
      <Link to="/new">Create a New Thread</Link>
      <div>
        {threads.length === 0 ? (
          <p>No threads available</p>
        ) : (
          threads.map((thread) => (
            <div key={thread.id}>
              <h2>
                <Link to={`/thread/${thread.id}`}>{thread.title}</Link>
              </h2>
              <p>{thread.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export { Home };