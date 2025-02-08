import React, { useRef } from "react";
import { Box } from "@mui/material";

import Navbar from "../../components/Navbar/Navbar";
import ProjectSection from "../../sections/Projects/Projectsection";
import Experience from "../../sections/Experience/Experience";
import Skills from "../../sections/Skills/Skills";
import Contact from "../../sections/Contact/Contact";
import ResumeDownload from "../../sections/ResumeDownload/ResumeDownload";
import "./Home.css";

function Home() {
  const homeRef = useRef(null); // ✅ Add ref for Home section
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);

  const refs = {
    homeRef,
    projectRef,
    experienceRef,
    skillsRef,
    contactRef,
    resumeRef,
  };

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error("Ref is undefined:", ref);
    }
  };

  return (
    <Box className="home-container">
      <Navbar scrollToSection={scrollToSection} refs={refs} />
      <div ref={homeRef}>
        {" "}
        {/* ✅ Assign homeRef here */}
        <h1>Welcome to My Portfolio. I am Rakesh Software Enginner</h1>
        <h1>Below are my Bio</h1>
      </div>
      <div ref={projectRef}>
        <ProjectSection />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div ref={resumeRef}>
        <ResumeDownload />
      </div>
    </Box>
  );
}

export default Home;
