import React from 'react';
import './WriteBlog.css';

const WriteBlog = () => {
  return (
    <div className="write-blog-container">
      <h2 className="write-heading">Write a New Blog</h2>
      <form className="blog-form">
        <input type="text" placeholder="Title" className="blog-title" />
        <textarea placeholder="Write your blog here..." className="blog-content"></textarea>
        <button type="submit" className="submit-btn">Publish</button>
      </form>
    </div>
  );
};

export default WriteBlog;
