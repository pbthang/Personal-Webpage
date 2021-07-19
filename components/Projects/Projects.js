import React from "react";
import Slider from "react-slick";
import styles from "./Projects.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

function Projects({ projects }) {
  const config = {
    adaptiveHeight: false,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: true,
    easing: "ease",
    infinite: true,
    pauseOnHover: true,
  };

  return (
    <div className={styles.container} id="Projects">
      <h2 className={`${styles.title} title`}>Projects</h2>
      <div className={styles.sliderContainer}>
        <Slider {...config} className={styles.slider}>
          {projects.map((project, idx) => (
            <div key={idx} className={styles.slide}>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <Image
                  src={project.imgSrc}
                  alt={project.label}
                  width={945}
                  height={445}
                  className={styles.img}
                />
              </a>
              <div className={styles.content}>
                <div className={styles.labelAndLink}>
                  <a
                    href={project.githubLink}
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer"
                    role="button"
                  >
                    <h3 className={styles.label}>{project.label}</h3>
                    <FontAwesomeIcon
                      icon={faLongArrowAltRight}
                      className={styles.arrowIcon}
                      size="2x"
                    />
                  </a>
                </div>
                <p className={styles.description}>{project.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
