// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;

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
        <ProjectsContainer>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </ProjectsContainer>
    );
};

export default Projects;