import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WriteBlog from './pages/WriteBlog';
import Login from './pages/Login';
import ReadBlog from './pages/ReadBlog';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/write" element={<WriteBlog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/read/:id" element={<ReadBlog />} />
    </Routes>
  );
};

export default App;
