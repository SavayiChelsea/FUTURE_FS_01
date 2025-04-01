import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}> Hello, I'm Savayi! </h1>
            <p className={styles.description}>
                I specialize in full Stack development, 
                mobile application development, and AIdriven solutions.
            </p>
            <a href = "mailto:savayichelsea90@gmail.com"className={styles.contactBtn}>Contact Me</a>
        </div>

        <img src = {getImageUrl("hero/heroImage.png")} alt='Hero image of me'
        className={styles.heroImg}/>
        <div className= {styles.topBlur}/>
        <div className= {styles.bottomBlur}/>
    </section>
    );
};