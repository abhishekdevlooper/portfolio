import React from "react";
import { Button } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import "./ResumeDownload.css";

const ResumeDownload = () => {
  const handleDownload = () => {
    const resumeUrl = "/resume.pdf"; // Ensure this path matches your resume file in the public folder
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "My_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-container">
      <h2 className="resume-title">Download My Resume</h2>
      <Button
        variant="contained"
        color="primary"
        className="resume-button"
        onClick={handleDownload}
        startIcon={<CloudDownloadIcon />}
      >
        Download Resume
      </Button>
    </div>
  );
};

export default ResumeDownload;
