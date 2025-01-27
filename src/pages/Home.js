import React from 'react';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <div className="content-wrapper">

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

    </div>
  );
};

export default Home;