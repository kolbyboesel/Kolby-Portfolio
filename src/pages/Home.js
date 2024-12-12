// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';

// Add your styled-components as before
const Section = styled.section`
  padding: 2rem;
  text-align: center;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const ContactLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const ContactLink = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #007BFF;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.1rem;
  transition: background-color 0.3s, transform 0.2s;
  
  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;


const Home = () => {

  return (
    <Section>
      <h2>About Me</h2>
      <AboutText>
        Highly motivated and detail-oriented student at the University of Wisconsin-Madison, with a
        strong foundation in Java, proficient in data structures, web design, and software development
        methodologies. Eager to contribute these skills to a software engineering role, aiming not only
        to enhance my technical expertise, but also deliver tangible value to your company through an
        innovative and problem-solving mindset and dedicated work ethic.
      </AboutText>

      <h2>Links</h2>
      <ContactLinks>
        <ContactLink href="https://github.com/kolbyboesel" target="_blank">GitHub</ContactLink>
        <ContactLink href="https://www.linkedin.com/in/kolby-boesel" target="_blank">LinkedIn</ContactLink>
        <ContactLink href="/Kolby_Resume.pdf" target="_blank">Resume</ContactLink>
      </ContactLinks>

      <h2>Contact</h2>
      <ContactLinks>
        <ContactLink href="mailto:kolbyzboesel@gmail.com" target="_blank">Email</ContactLink>
        <ContactLink href="tel:+4148288543" target="_blank">Phone</ContactLink>
      </ContactLinks>
    </Section>
  );
};

export default Home;