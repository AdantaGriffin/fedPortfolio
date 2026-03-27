import styles from './library.module.scss';
import React, {useEffect, useRef} from 'react';


function Library (){
    const listRef = useRef(null);

  const scrollLeft = () => {
    listRef.current.scrollBy({
      left: -340,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    listRef.current.scrollBy({
      left: 340,
      behavior: "smooth"
    });
  };
    return (
        <>
            <section className={styles.library}>
                <div className={styles.libraryContainer}>
                    <div ref={listRef} className={styles.listContainer}>
                        <ul className={styles.list}>
                            <li className={styles.book}><img src="theStand.jpg"/></li>
                            <li className={styles.book}><img src="lord.jpg"/></li>
                            <li className={styles.book}><img src="power.jpg"/></li>
                            <li className={styles.book}><img src="thinking.jpg"/></li>
                            <li className={styles.book}><img src="it.jpg"/></li>
                            <li className={styles.book}><img src="outsider.jpg"/></li>
                            <li className={styles.book}><img src="shinning.jpg"/></li>
                            <li className={styles.book}><img src="monster.jpg"/></li>
                            <li className={styles.book}><img src="balch.jpg"/></li>
                            <li className={styles.book}><img src="talk.jpg"/></li>
                        </ul>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button onClick={scrollLeft}>back</button>
                        <button onClick={scrollRight}>next</button>
                    </div>
                </div>
            </section>
        </> 
    )
};

export default Library;
