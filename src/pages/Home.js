import React from 'react';
import Header from '../components/Header';

const Home = () => {
  const projects = [
    {
      name: 'SOAP - iOS',
      description: '',
      image: '/ios_preview.png',
      link: 'https://apps.apple.com/us/app/soap-scores/id6475890955',
    },
    {
      name: 'SOAP - Web',
      description: '',
      image: '/web_preview.png',
      link: 'https://www.soapscores.com',
    },
  ];

  return (
    <div className="home-container">
      {/* Header Section */}
      <Header />

      <div className="content-wrapper">
        {/* Sidebar Section */}
        <aside className="sidebar">
          {/* Education Section */}
          <section id="education" className="section education-section">
            <h2>Education</h2>
            <div className="education-details">
              <p>
                <strong>September 2021 – May 2025</strong>
                <br />
                <em>University of Wisconsin, Madison</em>
              </p>
              <ul>
                <li>Bachelor of Science, Data Science</li>
                <li>Bachelor of Science, Information Science</li>
                <li>Certificate, Computer Science</li>
              </ul>
              <p>Relevant Coursework:</p>
              <ul>
                <li>Programming I-III</li>
                <li>Machine Learning</li>
                <li>Optimization</li>
                <li>Data Science Modelling</li>
                <li>Database Design</li>
              </ul>
            </div>
          </section>

          {/* Professional Experience Section */}
          <section id="experience" className="section experience-section">
            <h2>Professional Experience</h2>
            <div className="experience-details">
              <div className="experience-item">
                <p>
                  <strong>May 2024 – Present</strong>
                  <br />
                  <em>Software Development Intern</em> - QuadMed, Remote
                </p>
                <ul>
                  <li>
                    Leveraged Microsoft Power Platform to develop solutions tailored to evolving
                    company needs.
                  </li>
                  <li>
                    Developed Microsoft Power Apps to transition existing company processes to a
                    digital environment.
                  </li>
                  <li>
                    Utilized Microsoft PowerBI to create reports and dashboards for data modeling,
                    visualizing project progress, and assessing value.
                  </li>
                  <li>
                    Implemented an automation process using MS Flow, moving data from SQL Server to
                    Microsoft’s Dataverse.
                  </li>
                </ul>
              </div>
              <div className="experience-item">
                <p>
                  <strong>June 2023 – May 2024</strong>
                  <br />
                  <em>Variable Imaging Programming Intern</em> - Quad, Sussex, WI
                </p>
                <ul>
                  <li>
                    Produced graphics and layouts for direct mail campaigns based on customer
                    requests.
                  </li>
                  <li>


                    ```jsx
                    Ensured graphics functionality for datasets containing millions of records.
                  </li>
                  <li>
                    Served a variety of clients, tackling and fulfilling design goals.
                  </li>
                  <li>
                    Collaborated with other teams to ensure graphics and layouts met client and
                    mailing specifications.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </aside>

        {/* Main Projects Section */}
        <main className="main-content">
          <section id="projects" className="section projects-section">
            <h2>Projects</h2>
            <div className="projects-container">
              {projects.map((project, index) => (
                <div className="card" key={index}>
                  <img src={project.image} alt={project.name} className="project-image" />
                  <div className="project-details">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;