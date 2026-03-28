import styles from './contact.module.scss';
import React from 'react';

function Contact(){
    return(
        <>
            <section className={styles.contact}>
                <div className={styles.contactContainer}>
                    <form className={styles.emailForm}>
                        <h2>Get In Touch</h2>
                        <div>
                            <label for="name">Name:</label>
                            <input id="name" type="text" placeholder="Your Name" required/>
                        </div>
                        <div>
                            <label for="phone">Phone:</label>
                            <input id="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="(xxx) xxx-xxxx" required/>
                        </div>
                        <div>
                            <label for="email">Email:</label>
                            <input id="email" type="email" pattern="+@email\.com" placeholder="youremail@email.com" required/>
                        </div>

                        <button>submit</button>
                    </form>

                    <form>
                        <p>Adanta Griffin</p>
                        <p>adantagriffin90@gmail.com</p>
                        <p>718.820.2506</p>
                    </form>
                </div>
            </section>
        </>
    )
};

export default Contact