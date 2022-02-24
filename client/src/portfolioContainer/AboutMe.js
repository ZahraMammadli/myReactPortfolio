import React from "react";
import "../styles/custom-styles.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="progile-details">
          <div className="profile-details-name">
            <span className="create-text">
              {" "}
              Hello,{" "}
              <span className="create-text">This is About Me section</span>
            </span>
          </div>
          <div className="profile-details-role">
            <div className="about-summary">
              <p className="typewriter">
                I am deeply impressed when I see smart and beautiful code. These
                are moments when I feel that we have only touched the surface of
                what we can do with computers.
              </p>
              <Stack spacing={2}>
                <a href="resume.pdf" download="resume.pdf">
                  <Button variant="outlined">Resume</Button>
                </a>
              </Stack>
            </div>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
