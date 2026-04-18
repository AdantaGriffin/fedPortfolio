import styles from './contact.module.scss';
import React, {useRef} from 'react';

function Contact(){
    const formRef = useRef(null);

    const handleSubmit = (e) => {

        setTimeout(() => {
            formRef.current.reset();
        }, 200);
    };
    return(
        <>
            <section className={styles.contact}>
                <div className={styles.contactContainer}>
                    <form 
                    ref={formRef}
                    className={styles.emailForm}
                    action="https://formspree.io/f/mlgajaeo"
                    method="POST"
                    onSubmit={handleSubmit}
                    >
                        <div className={styles.formSection}>
                            <h2>Get In Touch</h2>
                        </div>

                        <div id={styles.name}className={styles.formSection}>
                            <input name="name" type="text" placeholder="Name" required/>
                        </div>

                        <div id={styles.phone} className={styles.formSection}>
                            <input name="phone" type="tel" placeholder="Phone" required/>
                        </div>

                        <div id={styles.email} className={styles.formSection}>
                                <input name="email" type="email" placeholder="Email" required/>
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

export default Contact;