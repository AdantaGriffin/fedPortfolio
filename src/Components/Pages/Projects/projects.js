import styles from './projects.module.scss';
import React from 'react';
function Projects(){
    return(
        <>
            <section className={styles.projects}>
                <div className={styles.projectsContainer}>
                    <header className={styles.projectsHeader}>
                        <h2>Projects</h2>
                    </header>
                    <blockquote className={styles.projectsBlock}>
                            <article className={styles.projectOne}>
                                <div className={styles.imgDogmigo}></div>
                                <h3>DogMiGo</h3>
                                <div className={styles.p}>
                                    <p>A professional static landing page for a dog walking company.</p>
                                </div>
                                <ul className={styles.stackList}>
                                    <li className={styles.stack}><mark>HTML5</mark></li>
                                    <li className={styles.stack}><mark>Sass</mark></li>
                                </ul>
                                <div className={styles.links}>
                                    {/*<a>git</a>*/}
                                    <a href="https://dogmigo.netlify.app/" target="_blank" rel="noreferrer">site</a>
                                </div>
                            </article>
                            <article className={styles.projectTwo}>
                                <div className={styles.imgFlexFit}></div>
                                <h3>Flex Fit</h3>
                                <div className={styles.p}>
                                    <p>A modern fitness gallery application that helps users find and learn how to perform exercise movements.</p>
                                </div>
                                <ul className={styles.stackList}>
                                    <li className={styles.stack}><mark>HTML5</mark></li>
                                    <li className={styles.stack}><mark>Sass</mark></li>
                                </ul>
                                <div className={styles.links}>
                                    {/*<a>git</a>*/}
                                    <a href="https://flexfitme.netlify.app/" target="_blank" rel="noreferrer">site</a>
                                </div>
                            </article>
                            <article className={styles.projectThree}>
                                <div className={styles.imgMobileFit}></div>
                                <h3>Mobile Fit</h3>
                                <div className={styles.p}>
                                    <p>Get in shape FAST with mobile fit. Fitness routines that last!</p>
                                </div>
                                <ul className={styles.stackList}>
                                    <li className={styles.stack}><mark>HTML5</mark></li>
                                    <li className={styles.stack}><mark>Sass</mark></li>
                                    <li className={styles.stack}><mark>JavaScript</mark></li>
                                    <li className={styles.stack}><mark>React</mark></li>
                                </ul>
                                <div className={styles.links}>
                                    {/*<a>git</a>*/}
                                    <a href="https://mobilenfit.netlify.app" target="_blank" rel="noreferrer">site</a>
                                </div>
                            </article>
                            <article className={styles.projectFour}>
                                <div className={styles.imgTheApex}>image</div>
                                <h3>The Apex</h3>
                                <div className={styles.p}>
                                    <p>Description</p>
                                </div>
                                <ul className={styles.stackList}>
                                    <li className={styles.stack}><mark>HTML5</mark></li>
                                    <li className={styles.stack}><mark>Sass</mark></li>
                                    <li className={styles.stack}><mark>JavaScript</mark></li>
                                    <li className={styles.stack}><mark>React</mark></li>
                                </ul>
                                <div className={styles.links}>
                                    {/*<a>git</a>*/}
                                    <a href="https://theap3x.netlify.app" target="_blank" rel="noreferrer">site</a>
                                </div>
                            </article>
                        </blockquote>
                        {/*<a>view more</a>*/}
                </div>
            </section>
        </>
    )
};

export default Projects
