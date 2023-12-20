// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HackerNewsSearch from './HackerNewsSearch';
import PostDetail from './PostDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HackerNewsSearch />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
