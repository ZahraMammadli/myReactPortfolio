import "./App.css";
// import Profile from "./portfolioContainer/Profile";
import Projects from "./portfolioContainer/Projects";
import Home from "./portfolioContainer/Home";
import Navigation from "./portfolioContainer/Navigation";
import ContactMe from "./portfolioContainer/ContactMe";
import Profile from "./portfolioContainer/AboutMe";
import NavNames from "./portfolioContainer/NavNames";
import Footer from "./portfolioContainer/Footer";
import { useState } from "react";

// Import images for projects
import Image1 from "../src/images/boarding-app.png";
import Image2 from "../src/images/universal_directory.png";
import Image3 from "../src/images/tech-blog.png";
import Image4 from "../src/images/codingquizscreenshot.png";
import Image5 from "../src/images/employee-management-system.png";
import Image6 from "../src/images/note-taker.png";

function App() {
  const [currDiv, setCurrDiv] = useState("other");

  return (
    <div className="App">
      <Navigation setCurrDiv={setCurrDiv} value={currDiv} />
      <Home />
      {currDiv === NavNames.PROFILE ? (
        <Profile />
      ) : currDiv === NavNames.CONTACT ? (
        <ContactMe />
      ) : (
        <div>
          <Projects
            Img={Image1}
            projectName="Boarding App"
            desc="The Boaring APP designed to get you out of your comfort zone"
            github="https://zahramammadli.github.io/TheBoringApp/index.html"
          />
          <Projects
            Img={Image2}
            projectName="Universal Directory"
            desc="This is Universal Directory for craftsman that can be used for any other B2B2C business"
            github="https://obscure-thicket-70245.herokuapp.com/"
          />
          <Projects
            Img={Image3}
            projectName="Tech Blog"
            desc="This is Tech Blog where devs can write and share thoughts"
            github="https://boiling-plateau-09535.herokuapp.com/"
          />
          <Projects
            Img={Image4}
            projectName="Code quiz"
            desc="This is Code quiz project that allow user to test their js skills"
            github="https://zahramammadli.github.io/CodeQuiz/"
          />
          <Projects
            Img={Image5}
            projectName="Employee Tracker"
            desc="This is Employee Management system that allows you to track employees "
            github="https://github.com/ZahraMammadli/EmployeeTracker/tree/dev"
          />
          <Projects
            Img={Image6}
            projectName="Note Taker"
            desc="Note Taker allows users to handle their day to day activites"
            github="https://safe-falls-80948.herokuapp.com/"
          />
        </div>
      )}{" "}
      <br />
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
}

export default App;
