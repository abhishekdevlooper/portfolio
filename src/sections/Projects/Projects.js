import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
} from "@mui/material";
import "./Projects.css";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce app using React and Spring Boot.",
    image:
      "https://images.unsplash.com/photo-1572177812156-58036aae439c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my work and skills.",
    image:
      "https://images.unsplash.com/photo-1492551557933-34265f7af79e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Task Manager App",
    description: "A task management app built with React and Firebase.",
    image:
      "https://images.unsplash.com/photo-1492551557933-34265f7af79e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Projects() {
  return (
    <Box className="projects-container">
      <Typography variant="h3" className="section-title">
        My Projects
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={8} className="project-paper">
              <Card className="project-card">
                <CardMedia
                  component="img"
                  height="220"
                  image={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <CardContent>
                  <Typography variant="h5" className="project-title">
                    {project.title}
                  </Typography>
                  <Typography variant="body1" className="project-description">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
