import "./App.css";
// import Profile from "./portfolioContainer/Profile";
import Projects from "./portfolioContainer/Card";
import Home from "./portfolioContainer/Home";
import Navigation from "./portfolioContainer/Navigation";

// Import images for projects
import Image1 from "../src/images/boarding-app.png";
import Image2 from "../src/images/universal_directory.png";
import Image3 from "../src/images/tech-blog.png";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Projects
        Img={Image1}
        projectName="Boarding App"
        desc="The Boaring APP designed to get you out of your comfort zone"
      />
      <Projects
        Img={Image2}
        projectName="Universal Directory"
        desc="This is Universal Directory for craftsman that can be used for any other B2B2C business"
      />
      <Projects
        Img={Image3}
        projectName="Tech Blog"
        desc="This is Tech Blog where devs can write and share thoughts"
      />
    </div>
  );
}

export default App;
