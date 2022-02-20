import React from "react";
import "../styles/custom-styles.css";
import HomepageWebDev from "../images/web-developer.svg";

function Home() {
  return (
    <section className="landing-page">
      <div className="hero-container">
        <div className="home-content">
          <div className="hello-world">
            <div className="typewriter">
              <h4> &lt; Hello World! /&gt;</h4>
            </div>
          </div>
          <div className="home-myself">
            <h2 className="myself-text">Zahra Mammadli</h2>
            <h3 className="create-text">Full stack dev</h3>
          </div>
          <div className="home-summary">
            <p className="summary-text">
              I am deeply impressed when I see smart and beautiful code. These
              are moments when I feel that we have only touched the surface of
              what we can do with computers.
            </p>
          </div>
        </div>
        <div className="home-image">
          <img
            src={HomepageWebDev}
            alt="This is a Web Dev cartoon from unDraw"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Home;
