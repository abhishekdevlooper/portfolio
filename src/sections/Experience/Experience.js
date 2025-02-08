import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  CardMedia,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import "./Experience.css";

const experiences = [
  {
    role: "Software Developer",
    company: "Tech Mahindra",
    duration: "2022 - Present",
    description:
      "Worked on full-stack development using Java, Spring Boot, and React.",
    image:
      "https://plus.unsplash.com/premium_vector-1734027997317-854a5f2c7b72?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdHdhcmUlMjBlbmdpbm5lcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    role: "Software Developer",
    company: "Tech Mahindra",
    duration: "2022 - Present",
    description: "Developed scalable microservices and implemented REST APIs.",
    image:
      "https://plus.unsplash.com/premium_vector-1734027997317-854a5f2c7b72?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdHdhcmUlMjBlbmdpbm5lcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    role: "Intern",
    company: "Tech Mahindra",
    duration: "2021 - 2022",
    description: "Assisted in backend development and automation testing.",
    image:
      "https://plus.unsplash.com/premium_vector-1734027997317-854a5f2c7b72?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdHdhcmUlMjBlbmdpbm5lcnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

function Experience() {
  return (
    <Box className="experience-container">
      <Typography variant="h4" className="section-title">
        Experience
        <br />
        <br />
      </Typography>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Accordion className="experience-accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Grid container alignItems="center">
                <Grid item xs={3}>
                  <CardMedia
                    component="img"
                    image={exp.image}
                    alt={exp.role}
                    className="experience-image"
                  />
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h6" className="role-title">
                    {exp.role}
                  </Typography>
                  <Typography variant="body1" className="company-name">
                    {exp.company}
                  </Typography>
                  <Typography variant="caption" className="duration">
                    {exp.duration}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="description">{exp.description}</Typography>
            </AccordionDetails>
          </Accordion>
        </motion.div>
      ))}
    </Box>
  );
}

export default Experience;
