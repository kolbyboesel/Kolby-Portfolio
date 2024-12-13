// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <section className="section">
      <h2>About Me</h2>
      <p className="about-text">
        Highly motivated and detail-oriented student at the University of Wisconsin-Madison, with a
        strong foundation in Java, proficient in data structures, web design, and software development
        methodologies. Eager to contribute these skills to a software engineering role, aiming not only
        to enhance my technical expertise, but also deliver tangible value to your company through an
        innovative and problem-solving mindset and dedicated work ethic.
      </p>

      <h2>Links</h2>
      <div className="contact-links">
        <a className="contact-link" href="https://github.com/kolbyboesel" target="_blank" rel="noreferrer">GitHub</a>
        <a className="contact-link" href="https://www.linkedin.com/in/kolby-boesel" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="contact-link" href="/Kolby_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
      </div>

      <h2>Contact</h2>
      <div className="contact-links">
        <a className="contact-link" href="mailto:kolbyzboesel@gmail.com" target="_blank" rel="noreferrer">Email</a>
        <a className="contact-link" href="tel:+4148288543" target="_blank" rel="noreferrer">Phone</a>
      </div>
    </section>
  );
};

export default Home;