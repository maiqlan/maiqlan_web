import React from 'react';
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hello! I'm Ren Mai.</h1>
                <p className={styles.description}>
                    I'm currently a Fourth-Year computer science student at Texas A&M with a minor in mathematics. <br /><br />With regards to my areas of interest, I enjoy projects with a focus in machine learning, cryptography, parallel computing, reverse engineering, and distributed system concepts. 
                </p>
                <a href="Mailto:mai.lauren2@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
}