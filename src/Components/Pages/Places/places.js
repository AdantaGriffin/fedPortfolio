import styles from './places.module.scss';
import React from 'react';

function Places(){
    return(
        <>
        <section className={styles.places}>
            <div className={styles.placesContainer}>
                <div className={styles.visited}>
                    <div id={styles.big} className={styles.spot}><img alt="" src="fpark.jpeg"/></div>
                    <div id={styles} className={styles.spot}>b</div>
                    <div id={styles} className={styles.spot}><img alt="" src="qfc.png"/></div>
                    <div id={styles.big} className={styles.spot}><img alt="" src="skydive.jpg"/></div>
                    <div id={styles} className={styles.spot}><img alt="" src="kyoto.jpg"/></div>
                    <div id={styles.small} className={styles.spot}>f</div>
                    <div id={styles} className={styles.spot}>g</div>
                    <div id={styles} className={styles.spot}>h</div>
                    <div id={styles.small} className={styles.spot}><img alt="" src="paris.avif"/></div>
                    <div id={styles} className={styles.spot}>j</div>
                    <div id={styles.big} className={styles.spot}><img alt="" src="cirque.jpg"/></div>
                    <div id={styles} className={styles.spot}>l</div>
                    <div id={styles} className={styles.spot}><img alt="" src="fogo.jpg"/></div>
                    <div id={styles.small} className={styles.spot}>n</div>
                    <div id={styles} className={styles.spot}>o</div>
                    <div id={styles} className={styles.spot}>p</div>
                    <div id={styles.big} className={styles.spot}><img alt="" src="sparta.jpeg"/></div>
                    <div id={styles} className={styles.spot}>r</div>
                    <div id={styles} className={styles.spot}>s</div>
                    <div id={styles.big} className={styles.spot}><img alt="" src="kaku.jpg"/></div>
                    <div id={styles} className={styles.spot}>u</div>
                    <div id={styles} className={styles.spot}>v</div>
                    <div id={styles.small} className={styles.spot}>w</div>
                    <div id={styles} className={styles.spot}>x</div>
                    <div id={styles.big} className={styles.spot}>y</div>
                    <div id={styles} className={styles.spot}>z</div>
                </div>
            </div>
        </section>
        </>
    )
};

export default Places;