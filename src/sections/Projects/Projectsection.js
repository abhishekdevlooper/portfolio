import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, Paper, Chip } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { motion } from "framer-motion";
import "./Projectsection.css";

const projects = [
  {
    image:
      "https://plus.unsplash.com/premium_vector-1683141147347-c6aa70127df2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "E-Commerce Platform",
    description:
      "A fully functional e-commerce platform with user authentication, product management, and payment integration.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    image:
      "https://plus.unsplash.com/premium_vector-1682270529589-c6c317b991e2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects, blogs, and contact details with smooth animations.",
    techStack: ["React", "Material UI", "Framer Motion"],
    link: "#",
  },
  {
    image:
      "https://plus.unsplash.com/premium_vector-1736865489265-bd04516d84b7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "AI Chatbot",
    description:
      "An AI-powered chatbot for customer support and business automation.",
    techStack: ["Python", "TensorFlow", "Dialogflow"],
    link: "#",
  },
];

function ProjectSection() {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box className="project-section">
      <Paper elevation={6} className="project-paper">
        <Grid container spacing={2} alignItems="center">
          {/* Left Side: Project Content */}
          <Grid item xs={12} md={6} className="project-content">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h4" className="project-title">
                {projects[currentProject].title}
              </Typography>
              <Typography variant="body1" className="project-description">
                {projects[currentProject].description}
              </Typography>
              <Box className="tech-stack">
                {projects[currentProject].techStack.map((tech, index) => (
                  <Chip key={index} label={tech} className="tech-chip" />
                ))}
              </Box>
              <Button
                className="project-button"
                variant="contained"
                href={projects[currentProject].link}
              >
                View Project
              </Button>
              <Box className="button-group">
                <Button className="nav-button" onClick={prevProject}>
                  <ArrowBackIos />
                </Button>
                <Button className="nav-button" onClick={nextProject}>
                  <ArrowForwardIos />
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Side: Project Image */}
          <Grid item xs={12} md={6} className="project-image-container">
            <motion.img
              key={currentProject}
              src={projects[currentProject].image}
              alt="Project"
              className="project-image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default ProjectSection;
