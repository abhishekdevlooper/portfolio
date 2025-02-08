import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import "./Footer.css";

function Footer() {
  return (
    <Box className="footer">
      <Typography variant="body2" className="footer-text">
        &copy; 2025 My Portfolio. All Rights Reserved.
      </Typography>

      {/* Social Media Links */}
      <Box className="footer-icons">
        <IconButton
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHub className="icon" />
        </IconButton>

        <IconButton
          href="https://www.linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedIn className="icon" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
