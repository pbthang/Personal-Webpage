import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar({ navItems }) {
  const [open, setOpen] = useState(false);
  let [transparency, setTransparency] = useState(0.0);

  const linkConfig = {
    smooth: true,
    spy: true,
    duration: 1000,
    offset: -60,
    activeClass: styles.active,
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const threshold = 600.0;
    if (window.pageYOffset > threshold) {
      setTransparency(1.0);
    } else if (window.pageYOffset < threshold) {
      setTransparency(window.pageYOffset / threshold);
    }
  };

  const transparencyStyle = {
    background: `rgba(20, 33, 61, ${transparency})`,
  };

  return (
    <nav className={styles.container} style={transparencyStyle}>
      <Link to="Home" {...linkConfig} className={styles.logo}>
        <Image src="/pbthang.png" alt="Pbthang" height={40} width={100} />
      </Link>

      <ul className={`${styles.navItems} ${open ? styles.open : styles.close}`}>
        {navItems.map((item, idx) => (
          <Link key={idx} to={item.linkTo} {...linkConfig}>
            <li className={styles.navItem}>{item.label}</li>
          </Link>
        ))}
      </ul>
      {open ? (
        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => setOpen((open) => !open)}
          size="2x"
          className={styles.menuIcon}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setOpen((open) => !open)}
          size="2x"
          className={styles.menuIcon}
        />
      )}
    </nav>
  );
}

export default Navbar;
