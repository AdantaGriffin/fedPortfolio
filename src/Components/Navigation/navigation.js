import styles from './navigation.module.scss';
import React, {useEffect} from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Navigation(){
    
    const toTop= () => {
        window.scrollTo(0,0);
    }
    
    return(
        <>
            <nav className={styles.nav}>
                <ul className={styles.navUL}>
                    <NavLink onClick={toTop} className={({isActive}) => (isActive ? styles.isactive : '')} to="/"><li>home</li></NavLink>
                    <NavLink onClick={toTop} className={({isActive}) => (isActive ? styles.isactive : '')} to="about"><li>about</li></NavLink>
                    <NavLink onClick={toTop} className={({isActive}) => (isActive ? styles.isactive : '')} to="projects"><li>projects</li></NavLink>
                    <NavLink onClick={toTop} className={({isActive}) => (isActive ? styles.isactive : '')} to="contact"><li>contact</li></NavLink>
                </ul>
            </nav>
        </>
    )
};

export default Navigation;
