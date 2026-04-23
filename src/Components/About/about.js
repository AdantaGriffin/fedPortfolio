import styles from './about.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function About(){
    return(
        <>
            <section className={styles.about}>
                    <article className={styles.aboutContainer}>
                        <header className={styles.aboutHeader}>
                            <h2>About</h2>
                        </header>

                        <blockquote className={styles.aboutBlock}>
                            <div className={styles.aboutOne}>
                                <aside>
                                   I am a Front End developer actively pursuing opportunities to continue developing my skills in a professional environment. I’m passionate about creating responsive, user focused applications that are both functional and intuitive. My experience with <code>JavaScript</code> has been incredibly engaging, and incorporating <code>React</code> into my toolkit has broadened my perspective on the depth and versatility of modern web development.
                                </aside>
                                <br/>
                            </div>
                            <br/>
                            <div className={styles.aboutTwo}>
                                <aside>
                                    When I’m not coding, I enjoy staying active, reading, and connecting with friends.
                                </aside>
                                <br/>
                                <span>→ </span><Link to="/library">library...</Link>
                                <br/>
                            </div>
                            <br/>
                            <div className={styles.aboutThree}>
                                <aside>
                                    Im currently looking for a rolewhere I can grow as a developer and contribute to a team.
                                </aside>
                                <br/>
                                <span>→ </span><Link to="/resume">resume...</Link>
                            </div>
                        </blockquote>
                    </article>
            </section>
        </>
    )
};

export default About