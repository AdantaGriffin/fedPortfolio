import styles from './home.module.scss'
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function Home(){
    
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return(
        <>
            <section className={styles.home}>
                <div className={styles.homeContainer}>
                    <h2>Front End Developer</h2>
                    <Link to="about" className={styles.homeButton}>Enter</Link>
                </div>
            </section>
        </>
    )
};

export default Home;