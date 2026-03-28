import styles from './library.module.scss';
import React, {useRef} from 'react';


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
                            <li className={styles.book}><img alt="" src="theStand.jpg"/></li>
                            <li className={styles.book}><img alt="" src="lord.jpg"/></li>
                            <li className={styles.book}><img alt="" src="power.jpg"/></li>
                            <li className={styles.book}><img alt="" src="thinking.jpg"/></li>
                            <li className={styles.book}><img alt="" src="it.jpg"/></li>
                            <li className={styles.book}><img alt="" src="outsider.jpg"/></li>
                            <li className={styles.book}><img alt="" src="shinning.jpg"/></li>
                            <li className={styles.book}><img alt="" src="monster.jpg"/></li>
                            <li className={styles.book}><img alt="" src="balch.jpg"/></li>
                            <li className={styles.book}><img alt="" src="talk.jpg"/></li>
                        </ul>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.back} onClick={scrollLeft}><img alt="" src="./next.png" height="100%" width="100%"/></button>
                        <button className={styles.next} onClick={scrollRight}><img alt="" src="./next.png" height="100%" width="100%"/></button>
                    </div>
                </div>
            </section>
        </> 
    )
};

export default Library;
