import styles from './header.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <>
            <header className={styles.pageHeader}>
                <Link to="/"><h1>Adanta Griffin</h1></Link>
            </header>
        </>
    )
};

export default Header