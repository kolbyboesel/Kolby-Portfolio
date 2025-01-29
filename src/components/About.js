import React from 'react';

const About = () => {
    return (
        <div className="content-wrapper">
            {/* Skills Section */}
            <section id="about" className="section">
                <h2>Hi, I'm Kolby</h2>
                <div className="about-details">
                    <p style={{ paddingRight: '20px' }}>
                        I'm a current senior at the University of Wisconsin - Madison, studying Data Science, Information Science, and Computer Science. I'm from Wauwatosa, Wisconsin, and have a passion for sports, technology, and learning new things.
                    </p>
                    <img className='headshot-image' src='/logo512.png' alt='Kolby_Headshot'></img>
                </div>
            </section>
        </div>
    );
};

export default About;
