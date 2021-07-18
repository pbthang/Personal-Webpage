import React from "react";
import Image from "next/image";
import styles from "./About.module.css";
import { Link } from "react-scroll";

function About() {
  const imgSize = [2592, 3456];
  const imgScale = 0.11;
  return (
    <div className={styles.container} id="About">
      <div className={styles.img}>
        <Image
          src="/pbthang_img.jpg"
          alt=""
          height={imgSize[1] * imgScale}
          width={imgSize[0] * imgScale}
          layout="fixed"
        />
      </div>
      <div className={styles.content}>
        <h2 className={`${styles.title} title`}>About me</h2>
        <p className={styles.aboutInfo}>
          Hi, my name is Pham Ba Thang, I am Vietnamese. I am currently a
          student majoring in Computer Science at the{" "}
          <a
            href="https://nus.edu.sg/"
            target="_blank"
            rel="noreferrer"
            role="button"
          >
            National University of Singapore
          </a>{" "}
          (NUS). I have a keen interest in Web Development, especially Frontend
          Development since it involves both logical thinking and creativity at
          the same time. <br />
          <br /> You can find out more about me through my Linkedin profile and
          GitHub page in the{" "}
          <Link
            to="Contact"
            smooth={true}
            spy={true}
            duration={1000}
            offset={-60}
            style={{ cursor: "pointer" }}
          >
            contact
          </Link>{" "}
          section. Thank you and have a nice day!
          <br />
        </p>
      </div>
    </div>
  );
}

export default About;