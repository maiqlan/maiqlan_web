import React from 'react';
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils';
import { get } from 'http';

export const Hero = () => {
    return (
        <section className={styles.container} id="profile">
            <div className={styles.imgContainer}>
                <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" />
            </div>
            <div className={styles.text}>
                <p className={styles.p1}>Hello, I'm</p>
                <h1 className={styles.title}>Ren Mai 🌷</h1>
                <p className={styles.p2}>Software Engineer</p>
                <div className={styles.btnContainer}>
                    <button className={styles.btn} onClick={() => window.open(getImageUrl("resume/resumeRen.pdf"))}>Download CV/Resume</button>
                    <button className={styles.btn} onClick={() => location.href = "./#contact"}>Contact Info</button>
                </div>
                <div className={styles.socials} id="socials-container">
                    <img className={styles.icon} src={getImageUrl("icons/linkedin.svg")} alt="linkedin" onClick={() => window.open('https://www.linkedin.com/in/maiqlan/')}/>
                    <img className={styles.icon} src={getImageUrl("icons/github.svg")} alt="github" onClick={() => window.open('https://github.com/maiqlan')}/>
                </div>
            </div>
        </section>
    )
}