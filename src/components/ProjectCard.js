// src/components/ProjectCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 80%;
  margin: 1rem;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectDetails = styled.div`
  padding: 1rem;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <ProjectImage src={project.image} alt={project.name} />
      <ProjectDetails>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
      </ProjectDetails>
    </Card>
  );
};

export default ProjectCard;