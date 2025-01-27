import React from 'react';

const Experience = () => {
    return (
        <div className="content-wrapper">
            {/* Skills Section */}
            <section id="education" className="section education-section">
                <h2>Skills</h2>
                <div className="education-details">
                    <p>
                        <strong>Programming Languages</strong>
                    </p>
                    <ul>
                        <li>Java, JavaScript, Swift, HTML, CSS, React, Python, C#</li>
                    </ul>
                    <p>
                        <strong>Technologies</strong>
                    </p>
                    <ul>
                        <li>Microsoft Power Apps, Microsoft Power BI, Microsoft Power Automate, Git/GitHub, MongoDB, SQLite, REST APIs, Azure DevOps
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
                                Ensured graphics functionality for datasets containing millions of records.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="section education-section">
                <h2>Education</h2>
                <div className="education-details">
                    <p>
                        <strong>September 2021 – May 2025</strong>
                        <br />
                        University of Wisconsin - Madison
                    </p>
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
                </div>
            </section>
        </div>
    );
};

export default Experience;
