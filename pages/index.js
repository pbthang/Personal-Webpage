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

export default function App(props) {
  const { navItems, education, experience, skills, projects, contact } = props;

  return (
    <>
      <Navbar navItems={navItems} />
      <main>
        <Home />
        <About education={education} experience={experience} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact contact={contact} />
      </main>
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
      education: [
        {
          school: "National University of Singapore",
          time: "2020-2024",
          location: "Singapore",
          major: "Computer Science",
        },
        {
          school: "Hanoi - Amsterdam High School for the Gifted",
          time: "2017-2020",
          location: "Hanoi, Vietnam",
          major: "Physics",
        },
      ],
      experience: [
        {
          title: "Frontend Engineer Intern",
          organization: "Crater Merch",
          time: "Dec 21 - Jan 22",
          description:
            "Built effective user interfaces for the product, for both web and mobile application",
        },
        {
          title: "Teaching Assistant",
          organization: "National University of Singapore",
          time: "Aug 21 - present",
          description:
            "Tutored a class of 8 for the module CS1101S Programming Methodology",
        },
        {
          title: "Physics Mentor",
          organization: "G-college Singapore (non-profit)",
          time: "Apr 20 - present",
          description:
            "Taught Physics for Vietnamese students who want to study overseas for university",
        },
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
          text: "HTML, CSS, JS, React, Redux, Next.js",
          id: "skill__frontend",
        },
        {
          icon: faServer,
          label: "Backend Development",
          text: "Node.js, Express.js, SQL",
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
          description: "This is my personal website which I made using NextJS.",
          githubLink: "https://github.com/pbthang/Personal-Webpage",
        },
        {
          imgSrc: "/discordBot.jpg",
          label: "Daily Dose of Jokes",
          description: "A simple Discord bot that tells jokes.",
          githubLink: "https://github.com/pbthang/Daily-Dose-of-Jokes",
        },
        {
          imgSrc: "/rhrh.png",
          label: "Restaurant HR Helper",
          description:
            "A team project under module CS2103 Software Engineering developed using Java, JavaFX, built with Gradle",
          githubLink: "https://github.com/AY2122S1-CS2103T-T17-1/tp",
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
