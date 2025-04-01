import React from 'react';

import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                src={getImageUrl ("about/aboutImage.png")} 
                alt ="Me working"
                className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src = {getImageUrl("about/cursorIcon.png")}
                         alt = "Cursor"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Full Stack Development</h3>
                            <p>Building responsive and user-friendly web applications using 
                            Laravel, Php, React, Node.js, and more.</p>
                        </div>
                        
                    </li>

                    <li className={styles.aboutItem}>
                        <img src = {getImageUrl("about/cursorIcon.png")}
                         alt = "Cursor"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Mobile App Development</h3>
                            <p>Creating cross-platform mobile applications 
                                using Kotlin, java and Flutter.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src = {getImageUrl("about/cursorIcon.png")}
                         alt = "Cursor"
                        />
                        
                        <div className={styles.aboutItemText}>
                            <h3>AI Solutions</h3>
                            <p>Implementing AI-driven solutions using Python,
                                Google colab, TensorFlow, and OpenAI APIs.</p>
                        </div>
                        <div></div>
                    </li>
                </ul>
            </div>
        </section>
    );
};