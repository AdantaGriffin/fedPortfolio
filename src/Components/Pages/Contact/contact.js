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
                        <h2>Get In Touch</h2>
                        <div>
                            <label for="name">Name:
                            <input id="name" type="text" placeholder="Your Name" required/>
                            </label>
                        </div>
                        <div>
                            <label for="phone">Phone:
                            <input id="phone" type="tel" placeholder="(xxx) xxx-xxxx" required/>
                            </label>
                        </div>
                        <div>
                            <label for="email">Email:
                                <input id="email" type="email" pattern="+@email\.com" placeholder="youremail@email.com" required/>
                            </label>
                        </div>
                        <div>
                            <label for="message">Message:
                                <textarea name="message" placeholder="Say Hello!"></textarea>
                            </label>
                        </div>

                        <button>submit</button>
                    </form>

                </div>
            </section>
        </>
    )
};

export default Contact