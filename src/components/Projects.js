import React from 'react';

const Projects = () => {
    const projects = [
        {
            name: 'SOAP - iOS',
            description: 'A fully customizable app, where a user can create their app experience by searching and adding any league or team to their favorites, with a seamless connection between iOS and Web.',
            skills: 'Swift, REST APIs, SQLite, MongoDB, Git/GitHub',
            image: '/ios_preview.jpeg',
            link: 'https://apps.apple.com/us/app/soap-scores/id6475890955',
        },
        {
            name: 'SOAP - Web',
            description: 'Web App where users can view Scores, Odds, and Predictions for their favorite sports leagues and teams.',
            skills: 'React, Javascript, HTML, CSS, C#, Axios, MongoDB, Azure DevOps, GitHub Actions',
            image: '/web_preview.png',
            link: 'https://www.soapscores.com',
        },
    ];

    return (
        <div className="content-wrapper">
            <section id="projects" className="section projects-section">
                <h2>Projects</h2>
                <div className="projects-container">
                    {projects.map((project, index) => (
                        <a href={project.link} key={index} className="card" target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt={project.name} className="project-image" />
                            <div className="project-details">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <p><strong>Top Skills: </strong>{project.skills}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;