import React from "react";
// import Typical from "react-typical"; Have issues with installing react-typical

export default function profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="progile-details">
          <div className="colz">
            <a href="https://www.linkedin.com/in/zahramammadli/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/ZahraMammadli">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC5lAcTea-glwfFR7gmZzl5Q">
              <i className="fa fa-youtube-square"></i>
            </a>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M{" "}
              <span className="highlighted-text">Zahra Mammadli</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                {/* <Typical 
                loop = {infinity}
                steps = {
                  "Passionate Engineer 😎",
                  1000,
                  "Full Stack Developer 🤓",
                  1000,
                  "React/React Native Developer 💻",
                  1000,
                  "Node js, Javascript, webAPI",
                  1000,                  
                }/>  issues with implementing this */}
              </h1>
              <span className="profile-role-tagline">
                I am deeply impressed when I see smart and beautiful code that
                does something I know is hard to accomplish. These are moments
                when I feel that we have only touched the surface of what we can
                do with computers, and I know that there is a simple solution to
                the current programming problem I am facing; I just need to get
                my head around it.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>

            <a href="resume.pdf" download="resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
