import React, { useState, useEffect } from "react";
import axios from "axios";

const ThreadsList = () => {
  // Initialize threads as an empty array
  const [threads, setThreads] = useState([]);
  
  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await axios.get("/api/threads");
        // Make sure response.data is an array
        setThreads(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching threads:", error);
        setThreads([]); // Set to empty array on error
      }
    };
    
    fetchThreads();
  }, []);
  
  // Add a check before mapping
  return (
    <div>
      <h1>Threads</h1>
      {Array.isArray(threads) ? (
        threads.map((thread) => (
          <div key={thread.id}>
            <h2>{thread.title}</h2>
            <p>{thread.content}</p>
          </div>
        ))
      ) : (
        <p>No threads found or loading...</p>
      )}
    </div>
  );
};

export default ThreadsList;

