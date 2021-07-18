import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects";
import {
  faReact,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faCodeBranch,
  faServer,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Contact from "../components/Contact";

export default function App({ navItems, skills, projects, contact }) {
  return (
    <>
      <Navbar navItems={navItems} />
      <Home />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact contact={contact} />
      <footer className="footer">Made by Thang Pham</footer>
    </>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      navItems: [
        { label: "Home", linkTo: "Home" },
        { label: "About", linkTo: "About" },
        { label: "Skills", linkTo: "Skills" },
        { label: "Projects", linkTo: "Projects" },
        { label: "Contact", linkTo: "Contact" },
      ],
      skills: [
        {
          icon: faCode,
          label: "Programming Language",
          text: "Javascript, Python, Java",
          id: "skill__lang",
        },
        {
          icon: faReact,
          label: "Frontend Development",
          text: "HTML, CSS, JS, React, Redux, NextJS",
          id: "skill__frontend",
        },
        {
          icon: faServer,
          label: "Backend Development",
          text: "NodeJS, Express",
          id: "skill__backend",
        },
        {
          icon: faCodeBranch,
          label: "Source Control",
          text: "Git, Github",
          id: "skill__sourceCtrl",
        },
      ],
      projects: [
        {
          imgSrc: "/openRealm.jpg",
          label: "Open Realm",
          description:
            "This is a web application under the NUS Orbital Programme dedicated to reading and writing in the form of prompts and answers. I am responsible for the frontend of this project.",
          githubLink: "https://github.com/pbthang/Open-Realm",
        },
        {
          imgSrc: "/personalWebsite.jpg",
          label: "Personal Website",
          description: "This is my personal website which I made using NextJS",
          githubLink: "https://github.com/pbthang/",
        },
      ],
      contact: [
        {
          icon: faLinkedin,
          label: "LinkedIn",
          content: "Thang Pham",
          link: "https://www.linkedin.com/in/thang-pham-a27b331a6/",
        },
        {
          icon: faGithub,
          label: "GitHub",
          content: "pbthang",
          link: "https://github.com/pbthang",
        },
        {
          icon: faEnvelope,
          label: "Email",
          content: "bathang02@gmail.com",
          link: "mailto:bathang02@gmail.com",
        },
        {
          icon: faMapMarkerAlt,
          label: "Location",
          content: "Singapore & Hanoi, Vietnam",
          link: "",
        },
      ],
    },
  };
};
