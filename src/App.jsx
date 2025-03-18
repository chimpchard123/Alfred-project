import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateThreads from './components/CreateThreads';
import ThreadsList from './components/ThreadsList';
import ThreadItem from './components/ThreadItem';
import ThreadDetails from './components/ThreadDetails';
import PostThread from './components/PostThread';
import './App.css';
 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Add this route for the root path */}
        <Route path="/" element={<ThreadsList />} />
        <Route path="/create-thread" element={<CreateThreads />} />
        <Route path="/threads" element={<ThreadsList />} />
        <Route path="/threads/:id" element={<ThreadItem />} />
        <Route path="/threadDetails/:id" element={<ThreadDetails />} />
        <Route path="/post-thread" element={<PostThread />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;





