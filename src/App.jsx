import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import BlogCard from './component/Blogcard';
import Footer from './component/Footer';

const App = () => {
  const blogs = [
    {
      title: "How to Start Blogging in 2025",
      author: "GGG",
      excerpt: "Here's a simple guide to get started with your first blog post and reach readers worldwide..."
    },
    {
      title: "React vs Angular: Which to Choose?",
      author: "AK",
      excerpt: "We compare two of the most popular frontend frameworks in today's development landscape..."
    },
    {
      title: "Write for Yourself or for Audience?",
      author: "VPD",
      excerpt: "Explore the philosophy behind writing blogs and finding your authentic voice..."
    }
  ];

  return (
    <>
    
      <Navbar />
      <Hero />
      <div className="container my-5">
        <div className="row">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              author={blog.author}
              excerpt={blog.excerpt}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
