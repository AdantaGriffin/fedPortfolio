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
                                    Im a front end developer thats looking forward to keep growing. I'm really into creating functional and responsive application. Working with JavaScript has been an amazing expereince, and with adding <code>REACT</code> to my tech stack, it showed me the many levels  and directions of programming.
                                </aside>
                                {/*<aside>
                                    Im a frontend developer with a strong interest in building clean, accessible and interactive user interfaces. I enjoy working with JavaScript and React. I like breaking down problems into simple reusable components. I'm always looking to improve my skills and learn best practices.
                                </aside>*/}
                                <br/>

                            </div>
                            <br/>
                            <div className={styles.aboutTwo}>
                                <aside>
                                    With my spare time I enjoy fitness, reading, and spending time with friends.
                                </aside>
                                <br/>
                                <Link to="/library">library...</Link>
                                <Link to="/places">places...</Link>
                            </div>
                            <br/>
                            <div className={styles.aboutThree}>
                                <aside>
                                    Im currently looking for a rolewhere I can grow as a developer and contribute to a team.
                                </aside>
                                <br/>
                                <Link to="/all">work...</Link>
                            </div>
                        </blockquote>
                    </article>
            </section>
        </>
    )
};

export default About