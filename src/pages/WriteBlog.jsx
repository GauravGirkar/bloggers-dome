import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const WriteBlog = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2>Write a New Blog</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Blog Title</label>
            <input type="text" className="form-control" placeholder="Enter blog title" />
          </div>
          <div className="mb-3">
            <label className="form-label">Author</label>
            <input type="text" className="form-control" placeholder="Your name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Content</label>
            <textarea className="form-control" rows="8" placeholder="Start writing here..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Publish</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default WriteBlog;
