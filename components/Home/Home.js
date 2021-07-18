import React from "react";
import styles from "./Home.module.css";
import Typewriter from "typewriter-effect";

function Home() {
  const info = ["Software Engineer.", "CS student.", "Vietnamese."];

  const handleTypewritingEffect = (typewriter) => {
    let tpwrt = typewriter.typeString("a ");

    for (const str of info) {
      tpwrt = tpwrt.typeString(str).pauseFor(2000).deleteChars(str.length);
    }
    tpwrt.start();
  };

  return (
    <div className={styles.container} id="Home">
      <div className={styles.text}>
        <span>
          Hello world.
          <br />I am Thang Pham,
        </span>
        <Typewriter
          onInit={handleTypewritingEffect}
          options={{
            loop: true,
            wrapperClassName: styles.typewriter,
            deleteSpeed: 15,
            delay: 80,
          }}
        />
      </div>
    </div>
  );
}

export default Home;
