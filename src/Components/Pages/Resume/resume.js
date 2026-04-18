import styles from './resume.module.scss';
import React from 'react';

function Resume(){
    return(
        <>
            <section className={styles.resume}>
                <section className={styles.resumeHeader}>
                    <p>Adanta Griffin | Brooklyn, NY</p>
                    <p>adantagriffin90@gmail.com | 718.820.2506</p>
                    <a href='/'>github.com/AdantaGriffin</a> | <a href='/'>adantag.netlify.app</a> | <a href='/'>linkedin.com/in/adanta-griffin</a>
                </section>

                <section className={styles.resumeSummary}>
                    Summary: 
                    <p>Entry level Web Developer with experience building responsive applications using HTML, CSS, JavaScript, and React. Passionate about creating user-friendly interfaces and continuously learning modern web technologies.</p>
                </section>

                <section className={styles.resumeSkills}>
                    Languages:
                    <p>Html, Css, Sass, JavaScript</p>
                    Frameworks/Libraries:
                    <p>React, Redux, Node.js, Jext, Mocha, Motion.js</p>
                    Tools:
                    <p>Git, GitHub, VS Code, Chrome DevTools</p>
                    Philosophy:
                    <p>Responsive Design, REST API</p>
                </section>

                <section className={styles.resumeProjects}></section>

                <section className={styles.resumeExperience}>
                    Experience:
                    <section className={styles.experienceDW}>
                        <h3>Bark Slope</h3>
                        <p>Dog Walker | 2024- 2026</p>
                        <ul>
                            <li>Managed schedules and multiple clients efficiently, reflecting strong time management and task prioritization skills used in development workflows</li>
                            <li>Built trust with colleagues and clients through reliability and communication, similar to collaborating with teams and stakeholders in tech environments</li>
                            <li>Adapted quickly to unexpected situations, demonstrating flexibility and problem-solving skills valuable in debugging and development challenges</li>
                        </ul>
                    </section>
                    <section className={styles.experienceRE}>
                        <h3>Sotheby's International</h3>
                        <p>Sales Agent | 2015 - 2024</p>
                        <ul>
                            <li>Managed client relationships and translated complex requirements into actionable solutions, similar to gathering and implementing user requirements in web development</li>
                            <li>Negotiated deals and solved problems under pressure, demonstrating strong analytical thinking applicable to debugging and troubleshooting code</li>
                            <li>Utilized digital tools and platforms to market properties, showing adaptability to new technologies and systems</li>
                            <li>Maintained strong attention to detail when handling contracts and documentation, directly transferable to writing clean, accurate code</li>
                        </ul>
                    </section>
                </section>

                <section className={styles.resumeEducation}></section>

                <section classNAme={styles.resumeCertifications}></section>
            </section>
        </>
    )
};

export default Resume