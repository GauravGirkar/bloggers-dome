import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-gradient d-flex align-items-center justify-content-center text-center">
      <div className="container px-4">
        <h1 className="hero-title">
          Share Your Knowledge,<br />Build Your Audience
        </h1>
        <p className="lead text-white-50 mt-3">
          Write blogs, read others, comment, and connect with a community that cares about ideas.
        </p>
        <button className="btn btn-light btn-lg mt-4 fw-semibold">Start Writing</button>
      </div>
    </section>
  );
};

export default Hero;
