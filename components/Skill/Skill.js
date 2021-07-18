import React from "react";
import styles from "./Skill.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skill({ icon, label, text, id }) {
  return (
    <div className={styles.container}>
      <div className={styles.iconAndLabel} id={id}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={icon} size="6x" />
        </div>
        <h3 className={styles.label}>
          {label.split(" ").map((word, idx) => (
            <div key={idx}>{word}</div>
          ))}
        </h3>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}

export default Skill;
