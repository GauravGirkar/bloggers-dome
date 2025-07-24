import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, author, excerpt }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
          <p className="card-text">{excerpt}</p>
          <Link to={`/read/${id}`} className="btn btn-outline-primary">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
