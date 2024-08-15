import { useState, useEffect } from 'react';
import styles from '../styles/About.module.css';
import ProgressLine from '../components/ProgressLine';

function About() {
    useEffect(() => {
        const progressBar = document.getElementById('bar1');
        if (progressBar) {
          progressBar.classList.add(styles.animate);
        }
      }, []);

    return(
        <div className={`${styles.page}`}>
            <div className={`${styles.g_item}`} id='AText'>
                <h1>About Me</h1>
                <p>Hello! I'm Igor Eremin, a recent Bachelor of Computer Science graduate from Thompson Rivers University based in North Vancouver.</p>
                <p>During my university years, I gained hands-on experience in web development, software development, and technical support. I am proficient in several programming languages, including JavaScript, Python, HTML, CSS, C#, and PHP. My strengths lie in critical thinking, troubleshooting, teamwork, and creativity.</p>
                <p>I am enthusiastic, passionate, and dedicated to delivering high-quality work. My goal is to leverage my skills to create innovative solutions and contribute to impactful projects in the tech industry. Whether solving complex software problems or designing sleek web interfaces, I bring creativity and attention to detail to every task.</p>
            </div>
            <div className={`${styles.g_item} ${styles.skill_column}`}>
                <div className={`${styles.skill_c1}`}>
                    <ProgressLine label="JavaScript"    visualParts={[{ percentage: "90%", color: "#9f937c" }]} />
                    <ProgressLine label="React Native"  visualParts={[{ percentage: "65%", color: "#9f937c" }]} />
                    <ProgressLine label="React"         visualParts={[{ percentage: "80%", color: "#9f937c" }]} />
                    <ProgressLine label="HTML/CSS"      visualParts={[{ percentage: "85%", color: "#9f937c" }]} />
                </div>
                <div className={`${styles.skill_c2}`}>
                    <ProgressLine label="Node.js"       visualParts={[{ percentage: "90%", color: "#9f937c" }]} />
                    <ProgressLine label="Python"        visualParts={[{ percentage: "60%", color: "#9f937c" }]} />
                    <ProgressLine label="PHP"           visualParts={[{ percentage: "75%", color: "#9f937c" }]} />
                    <ProgressLine label="SQL"           visualParts={[{ percentage: "90%", color: "#9f937c" }]} />
                </div>
            </div>
        </div>
    );
}

export default About;
