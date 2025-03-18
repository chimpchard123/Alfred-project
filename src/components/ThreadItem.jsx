import React from 'react';
import { Link } from 'react-router-dom';

const ThreadItem = ({ thread }) => {
  return (
    <div>
      <h2>{thread.title}</h2>
      <p>{thread.content}</p>
      <Link to={`/threads/${thread.id}`}>View Thread</Link>
    </div>
  );
};

export default ThreadItem;
