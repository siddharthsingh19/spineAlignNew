import React from "react";
import styles from "./page.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.conHeading}>Contact Us</h1>
      <div className={styles.conWrapper}>
        <div className={styles.cont}>
          <h2>Email Us At</h2>
          <a
            href="mailto:rajansingh.vigen@gmail.com?subject=Looking for therapy equipment&body=Hello There"
            className={styles.contactme}
          >
            rajansingh.vigen@gmail.com
          </a>
        </div>
        <div className={styles.cont}>
          <h2>Call Us At</h2>
          <a href="tel:+918577047227" className={styles.contactme}>
            8577047227
          </a>
        </div>
        <div className={styles.cont}>
          <h2>Whatsapp At</h2>
          <a className={styles.contactme} href="https://wa.me/8577047227">
            8577047227
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
