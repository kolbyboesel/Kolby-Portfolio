// src/pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projects = [
        {
            name: 'SOAP - iOS',
            description: '',
            image: '/ios_preview.png',
            link: 'https://apps.apple.com/us/app/soap-scores/id6475890955'
        },
        {
            name: 'SOAP - Web',
            description: '',
            image: '/web_preview.png',
            link: 'https://www.soapscores.com'
        }
    ];

    return (
        <div className="projects-container">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
};

export default Projects;