import React, { useState } from 'react';
import { FaEye, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Projects = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const projects = [
        {
            name: 'SOAP - iOS',
            description: 'A fully customizable app, where a user can create their app experience by searching and adding any league or team to their favorites, with a seamless connection between iOS and Web.',
            languages: 'Swift',
            technologies: 'REST APIs, SQLite, MongoDB, Git/GitHub',
            concepts: 'Object-Oriented Programming',
            timelineImage: '/swift-og.png',
            previewImage: '/ios_preview.jpeg',
            link: 'https://apps.apple.com/us/app/soap-scores/id6475890955',
            time: 'December 2023 - Present',
            links: [{ name: 'App Store Link', link: 'https://apps.apple.com/us/app/soap-scores/id6475890955' }, { name: 'GitHub (Access Required)', link: 'https://github.com/kolbyboesel/SOAP-iOS-Live' }],
        },
        {
            name: 'SOAP - Web',
            description: 'Web App built using React and .NET, where users have the ability view Scores, Odds, and Predictions for their favorite sports leagues and teams.',
            languages: 'Javascript, HTML, CSS, C#',
            technologies: 'React, Axios, MongoDB, Azure DevOps, Git/GitHub',
            concepts: 'Object-Oriented Programming',
            timelineImage: '/react_logo.png',
            previewImage: '/web_preview.png',
            link: 'https://www.soapscores.com',
            time: 'May 2023 - Present',
            links: [{ name: 'Live Link', link: 'https://www.soapscores.com' }, { name: 'Frontend GitHub', link: 'https://github.com/kolbyboesel/SOAP-Frontend' }, { name: 'Backend GitHub (Access Required)', link: 'https://github.com/kolbyboesel/SOAP-Backend' }],

        },
    ];

    const handleProjectClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index); // Toggle expanded state
    };


    return (
        <div className="content-wrapper">
            <section id="projects" className="section timeline-section">
                <h2>Projects</h2>
                <div>
                    <div className="timeline-wrapper">
                        {projects.map((project, index) => (
                            <div
                                key={index} className="timeline-item" target="_blank" rel="noopener noreferrer" >
                                <img src={project.timelineImage} alt={project.name} className="timeline-item-icon" />
                                <div className="timeline-content" onClick={() => handleProjectClick(index)}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h3>{project.name}</h3>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <FaEye size={24} className='button-icon' />
                                        </a>
                                    </div>
                                    <p>{project.description}</p>
                                    <p><em>{project.time}</em></p>

                                    {expandedIndex !== index && (
                                        <div onClick={() => handleProjectClick(index)} className='full-width-btn'>
                                            <FaChevronDown size={24} className='button-icon' />
                                        </div>
                                    )}
                                    {expandedIndex === index && (
                                        <div>
                                            <div onClick={() => handleProjectClick(index)} className='full-width-btn'>
                                                <FaChevronUp size={24} className='button-icon' />
                                            </div>
                                            <h3 className='project-info-header' >More Information</h3>
                                            <p><strong>Languages:</strong> {project.languages}</p>
                                            <p><strong>Technologies:</strong> {project.technologies}</p>
                                            <p><strong>Concepts:</strong> {project.concepts}</p>

                                            <h3 className='project-info-header'>Source Links</h3>
                                            {project.links.map((link, linkIndex) => (
                                                <p key={linkIndex}>
                                                    <a className='source-link' href={link.link} target="_blank" rel="noopener noreferrer">{link.name}</a>
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;