import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { motion } from "framer-motion";
import "./Slideshow.css";

const slides = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1681488275460-9d0a45509a5f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Empowering Innovation",
    description: "Creating cutting-edge technology to shape the future.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Accelerating Business Growth",
    description: "Scalable solutions tailored for high-performance growth.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_vector-1726137042559-a33e4ee3f370?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Collaboration & Excellence",
    description: "Bringing people together for innovative success.",
  },
];

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box className="slideshow-container">
      <Paper elevation={8} className="slideshow-paper">
        <Grid container spacing={2} alignItems="center">
          {/* Left: Text Content */}
          <Grid item xs={12} md={6} className="text-container">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h4" className="slide-title">
                {slides[currentSlide].title}
              </Typography>
              <Typography variant="body1" className="slide-description">
                {slides[currentSlide].description}
              </Typography>
              <Box className="button-group">
                <Button className="nav-button" onClick={prevSlide}>
                  <ArrowBackIos />
                </Button>
                <Button className="nav-button" onClick={nextSlide}>
                  <ArrowForwardIos />
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Right: Image */}
          <Grid item xs={12} md={6}>
            <motion.img
              key={currentSlide}
              src={slides[currentSlide].image}
              alt="Slide"
              className="slide-image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Slideshow;
