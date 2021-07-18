import React from "react";
import styles from "./Skills.module.css";
import Skill from "../Skill";

function Skills({ skills }) {
  return (
    <div className={styles.container} id="Skills">
      <h2 className={`${styles.title} title`}>Skills</h2>
      <div className={styles.skills}>
        {skills.map((props, idx) => (
          <Skill key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
