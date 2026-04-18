import styles from './contact.module.scss';
import React from 'react';

function Contact(){
    return(
        <>
            <section className={styles.contact}>
                <div className={styles.contactContainer}>
                    <form 
                    className={styles.emailForm}
                    action="https://formspree.io/f/mlgajaeo"
                    method="POST"
                    >
                        <div className={styles.formSection}>
                            <h2>Get In Touch</h2>
                        </div>

                        <div id={styles.name}className={styles.formSection}>
                            <input id="name" type="text" placeholder="Name" required/>
                        </div>

                        <div id={styles.phone} className={styles.formSection}>
                            <input id="phone" type="tel" placeholder="Phone" required/>
                        </div>

                        <div id={styles.email} className={styles.formSection}>
                                <input id="email" type="email" pattern="+@email\.com" placeholder="Email" required/>
                        </div>

                        <div id={styles.message} className={styles.formSection}>
                                <textarea name="message" placeholder="Say Hello!"></textarea>
                        </div>

                        <div className={styles.formSection}>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
};

export default Contact