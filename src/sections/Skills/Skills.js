import React from "react";
import { Box, Typography, Grid, Paper, Chip, Avatar } from "@mui/material";
import "./Skills.css";

const skills = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Spring Boot",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Material UI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "Hibernate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

function Skills() {
  return (
    <Box className="skills-container">
      <Typography variant="h4" className="section-title">
        Skills
        <br />
        <br />
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Paper elevation={4} className="skill-paper">
              <Chip
                avatar={<Avatar src={skill.logo} className="skill-avatar" />}
                label={skill.name}
                className="skill-chip"
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills;
