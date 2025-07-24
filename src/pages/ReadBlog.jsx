import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const blogData = {
  1: {
    title: "How to Start Blogging in 2025",
    author: "GGG",
    content: "Here's a detailed guide on how to kickstart your blogging journey in 2025..."
  },
  2: {
    title: "React vs Angular: Which to Choose?",
    author: "AK",
    content: "Both are powerful frameworks. React is component-based and Angular is full-fledged MVC..."
  },
  3: {
    title: "Write for Yourself or for Audience?",
    author: "VPD",
    content: "It depends on your goals. Some write to express, others to impress. Balance is key..."
  }
};

const ReadBlog = () => {
  const { id } = useParams();
  const blog = blogData[id];

  return (
    <>
      <Navbar />
      <div className="container my-5">
        {blog ? (
          <>
            <h2>{blog.title}</h2>
            <p className="text-muted">by {blog.author}</p>
            <p>{blog.content}</p>
          </>
        ) : (
          <h4>Blog not found</h4>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ReadBlog;
