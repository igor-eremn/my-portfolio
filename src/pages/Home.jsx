import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { Linkedin, DownloadIcon, Github, InstagramIcon } from "lucide-react"
import ImageSlider from '../components/ImageSlider';

import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

const images = [
    {
        imgURL: img1,
        imgAlt: "img1"
    },
    {
        imgURL: img2,
        imgAlt: "img2"
    },
    {
        imgURL: img3,
        imgAlt: "img3"
    },
];

function Home() {
    {/* Connect Buttons */}
    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/igoeremin/', '_blank');
    };
    const handleDownloadClick = () => {
        window.location.href = 'https://drive.google.com/uc?export=download&id=1R37S3oWdsPmBMl1FV6WadCRjKZkwJ9y6';
    };
    const handleGithubClick = () => {
        window.open('https://github.com/igor-eremn', '_blank');
    };
    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/igor.eremn/', '_blank');
    };

    return(
        <div className={`${styles.page}`}>
            <div className={`${styles.g_item} ${styles.Images}`}>
                <ImageSlider>
                    {images.map((image, index) => {
                    return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
                    })}
                </ImageSlider>
            </div>
            <div className={`${styles.g_item} ${styles.about}`}>
                <div className={`${styles.info}`}>
                    <h1>Igor Eremin</h1>
                    <p>- Graduate 2024 - Bachelor of Computer Science</p>
                    <p>- Software Developer - SKYTRAC - 1 year</p>
                    <p>- Web Developer - MagElements - 1 year</p>
                    <p>- IT Technician - Apple - 2 years</p>
                </div>
                <div className={`${styles.connect}`}>
                    <h1>Connect</h1>
                    <div className={`${styles.button_container}`}>
                        <button className={`${styles.connect_button}`} onClick={handleLinkedInClick}><Linkedin /></button>
                        <button className={`${styles.connect_button}`} onClick={handleDownloadClick}><DownloadIcon /></button>
                        <button className={`${styles.connect_button}`} onClick={handleGithubClick}><Github /></button>
                        <button className={`${styles.connect_button}`} onClick={handleInstagramClick}><InstagramIcon /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;