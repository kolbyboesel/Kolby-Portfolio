import React from 'react';

const Experience = () => {
    return (
        <div className="content-wrapper">
            {/* Skills Section */}
            <section id="skills" className="section">
                <h2>Skills</h2>
                <div>
                    <p>
                        <strong>Programming Languages</strong>
                    </p>
                    <ul>
                        <li>Java, JavaScript, Swift, HTML, CSS, Python, C#</li>
                    </ul>
                    <p>
                        <strong>Technologies</strong>
                    </p>
                    <ul>
                        <li>React, Blazor, Microsoft Power Apps, Microsoft Power BI, Microsoft Power Automate, Git/GitHub, MongoDB, SQLite, REST APIs, Azure DevOps
                        </li>
                    </ul>
                    <p>
                        <strong>Concepts</strong>
                    </p>
                    <ul>
                        <li>Agile Development Methodologies, Object-Oriented Programming</li>
                    </ul>
                </div>
            </section>

            {/* Timeline Section */}
            <section id="experience" className="section timeline-section">
                <h2>Experience</h2>
                <div>
                    <div className="timeline-wrapper">
                        <div className="timeline-item">
                            <img src="/quadmed_logo.jpeg" className='timeline-item-icon' alt="QuadMed Logo" />
                            <div className="timeline-content">
                                <p><strong>QuadMed</strong></p>
                                <p><strong>Software Development Intern</strong></p>
                                <p>I was immmersed in the Microsoft Power Platform world, where I developed applications using Microsoft Power Apps and built reports to analyze company efficiency using PowerBI. I also used Microsoft Power Automate to improve automation processes throughout the company.</p>
                                <p><em>May 2024 - Present</em></p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <img src="/quad_logo.png" className='timeline-item-icon' alt="QuadMed Logo" />
                            <div className="timeline-content">
                                <p><strong>Quad</strong></p>
                                <p><strong>Variable Imaging Programming Intern</strong></p>
                                <p>I worked with a variety of external companies around the world to execute their recurring direct mail campaigns. I used Inspire Designer to create graphics which would be functional for millions of records based on client and mailing specifications.</p>
                                <p><em>June 2023 - May 2024</em></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Education Section */}
            <section id="education" className="section timeline-section">
                <h2>Education and Certificates</h2>
                <div>
                    <div className="timeline-wrapper">
                        <div className="timeline-item">
                            <img src="/uwmadison_logo.png" className='timeline-item-icon' alt="QuadMed Logo" />
                            <div className="timeline-content">
                                <p><strong>University of Wisconsin - Madison</strong></p>
                                <p>
                                    <strong>Degrees and Certificates</strong>
                                </p>
                                <ul>
                                    <li>Bachelor of Science, Data Science</li>
                                    <li>Bachelor of Science, Information Science</li>
                                    <li>Certificate, Computer Science</li>
                                </ul>
                                <p>
                                    <strong>Relevant Coursework</strong>
                                </p>
                                <ul>
                                    <li>Programming I - III (Completed in Java and Python variants)</li>
                                    <li>Machine Learning</li>
                                    <li>Optimization</li>
                                    <li>Data Science Modeling</li>
                                    <li>Database Design</li>
                                </ul>
                                <p><em>September 2021 - May 2025</em></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Experience;
