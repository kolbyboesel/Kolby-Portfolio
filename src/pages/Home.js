import React from 'react';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import About from '../components/About';

const Home = () => {
  return (
    <div >
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

    </div>
  );
};

export default Home;