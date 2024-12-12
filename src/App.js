import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>Hi, I'm a web developer with a passion for building amazing things!</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>Project 1 - Description</li>
          <li>Project 2 - Description</li>
          <li>Project 3 - Description</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: your-email@example.com</p>
      </section>
    </div>
  );
}

export default App;