import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar({ scrollToSection, refs }) {
  if (!refs) {
    console.error("Refs prop is undefined in Navbar component");
    return null;
  }

  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar className="navbar-toolbar">
        <motion.div
          className="navbar-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <div className="navbar-links">
          {[
            { name: "Home", ref: refs.homeRef }, // ✅ Fixed homeRef issue
            { name: "Projects", ref: refs.projectRef },
            { name: "Experience", ref: refs.experienceRef },
            { name: "Skills", ref: refs.skillsRef },
            { name: "Contact", ref: refs.contactRef },
            { name: "Resume", ref: refs.resumeRef },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Button
                className="navbar-button"
                onClick={() => scrollToSection(item.ref)}
              >
                {item.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
