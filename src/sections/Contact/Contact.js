import React from "react";
import { Box, Typography, TextField, Button, Paper, Grid } from "@mui/material";
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  return (
    <Box className="contact-container">
      <Box className="contact-overlay">
        <Typography variant="h4" className="section-title">
          Contact Me
          <br />
          <br />
        </Typography>
        <Paper elevation={6} className="contact-paper">
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={10}>
              <TextField
                className="contact-input"
                label="Your Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                className="contact-input"
                label="Your Email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                className="contact-input"
                label="Your Message"
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Button className="contact-button" variant="contained">
                  Send Message
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}

export default Contact;
