import React from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import BlogCard from '../component/BlogCard';
import Footer from '../component/Footer';

const Home = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Start Blogging in 2025",
      author: "GGG",
      excerpt: "Here's a simple guide to get started with your first blog post..."
    },
    {
      id: 2,
      title: "React vs Angular: Which to Choose?",
      author: "AK",
      excerpt: "We compare two of the most popular frontend frameworks..."
    },
    {
      id: 3,
      title: "Write for Yourself or for Audience?",
      author: "VPD",
      excerpt: "Explore the philosophy behind writing blogs and finding your voice..."
    }
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container my-5">
        <div className="row">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
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

export default Home;
