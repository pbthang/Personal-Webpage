import React from "react";
import styles from "./ContactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltRight,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";

function ContactForm() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Leave me a message here
        <FontAwesomeIcon
          icon={faCommentAlt}
          className={styles.icon}
          size="lg"
        />
      </h3>
      <form
        id="fs-frm"
        name="contactForm"
        acceptCharset="utf-8"
        action="https://formspree.io/f/mpzkjypd"
        method="POST"
        className={styles.form}
      >
        <input
          type="text"
          name="name"
          placeholder="Name*"
          required
          className={styles.name}
          autoComplete="on"
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          required
          autoComplete="on"
          className={styles.email}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          autoComplete="nope"
          className={styles.subject}
        />
        <textarea
          name="message"
          placeholder="Your Message*"
          required
          autoComplete="nope"
          className={styles.message}
        ></textarea>
        <div className={styles.submit}>
          <button type="submit" className={styles.btn}>
            SEND IT
            <FontAwesomeIcon
              icon={faLongArrowAltRight}
              size="lg"
              className={styles.arrowIcon}
            />
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
