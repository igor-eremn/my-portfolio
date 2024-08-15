import { useState, useEffect } from 'react';
import styles from '../styles/Experience.module.css';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';
import styled from 'styled-components';

import project1 from '../assets/project1.jpeg'
import project2 from '../assets/project2.jpeg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'

const SectionTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

function Experience() {
    return(
        <div className={`${styles.page}`}>
            <div className={`${styles.ExperienceContainer}`}>
            <ExperienceCard
                company="SKYTRAC"
                position="Web Developer"
                years="2022-23"
                description="Development of responsive web applications using React.js, eenhancing user experience and engagement. Enhanced proficiency in modern web developmnet practices, including version control, component testing and Agile methodologies."
            />
            <ExperienceCard
                company="Apple"
                position="Tier 2 Technical Support"
                years="2020-22"
                description="Provided advanced technical support, resolving complex issues with computers, phones, tablets, smart TVs, and headphones. Ensured high customer satisfaction through effective troubleshooting and problem-solving."
            />
            <ExperienceCard
                company="MagElem"
                position="Front-End Web Developer"
                years="2019-20"
                description="Designed and implemented interactive and responsive web interfaces. Collaborated with backend developers to integrate user-facing elements with server-side logic. Optimized web applications for maximum speed and scalability."
            />
            </div>
            <div className={styles.ProjectContainer}>
                <ProjectCard
                    image={project1}
                    title="Runaway Drone"
                    description="Created software for a drone that scans objects while flying on the runway and detects its GPS location. Used Python, OpenCV, IMU."
                />
                <ProjectCard
                    image={project2}
                    title="SmartPI Boat"
                    description="Created a physical boat that can be controlled through an application. It has different motors that can be used separately or simultaneously. Used Raspberry Pi, Android Studio, Firebase."
                />
                <ProjectCard
                    image={project3}
                    title="TRU Parking"
                    description="Created a parking application for university to fix the problem of waiting in line for the parking machine. Used Android Studio, Google Maps API, Firebase."
                />
                <ProjectCard
                    image={project4}
                    title="Chess Opening"
                    description="Created a chess openings application. The main idea was to teach users different chess openings and test their knowledge at the end. Used Android Studio, Firebase."
                />
                </div>
        </div>
    );
}

export default Experience;