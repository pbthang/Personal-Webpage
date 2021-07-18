import React from "react";
import styles from "./Contact.module.css";
import ContactForm from "../ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact({ contact }) {
  return (
    <div className={styles.container} id="Contact">
      <h2 className={`${styles.title} title`}>Contact</h2>
      <ContactForm />
      {/* <hr className={styles.divider} /> */}
      <div className={styles.footer}>
        {contact.map((item, idx) =>
          !!item.link ? (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className={styles.contactItem}
            >
              <FontAwesomeIcon icon={item.icon} className={styles.icon} />
              <div>
                <div className={styles.label}>{item.label}:</div>
                <div className={styles.content}>{item.content}</div>
              </div>
            </a>
          ) : (
            <span key={idx} className={styles.contactItem}>
              <FontAwesomeIcon icon={item.icon} className={styles.icon} />
              <div>
                <div className={styles.label}>{item.label}:</div>
                <div className={styles.content}>{item.content}</div>
              </div>
            </span>
          )
        )}
      </div>
    </div>
  );
}

export default Contact;
