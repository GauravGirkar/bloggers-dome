import React from 'react';

const BlogCard = ({ title, author, excerpt }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-primary">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">by {author}</h6>
          <p className="card-text">{excerpt}</p>
          <a href="#" className="btn btn-outline-primary">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
