import "./App.css";
import lightIcon from "./img/Icon.png";
import MySVGIcon from "./img/map.svg";
import github from "./img/githup.svg";
import linkedin from "./img/linkedin.svg";
import instagram from "./img/instagram.svg";
import Dark from "./img/dark.svg";
import { createContext, useState } from "react";
import Tec from "./components/tec";
import html from "./img/icons8-html.svg";
import css from "./img/icons8-css.svg";
import JS from "./img/javscript.svg";
import tailwindcss from "./img/icon-tailwindcss.svg";
import ReactIcon from "./img/react.svg";
import sass from "./img/sass.svg";
import Git from "./img/git.svg";
import figma from "./img/figma.svg";
import CertificationsCard from "./components/certificationsCard";
import udacity from "./img/udacity-seeklogo.com.svg";
import UdacityCer from "./cer/download.pdf";
import Meta from "./img/icons8-meta.svg";
import Introduction from "./cer/Coursera Introduction to Front-End Development.pdf";
import HtmlCss from "./cer/Coursera HTML and CSS in depth.pdf";
import VersionControl from"./cer/Coursera version control.pdf"


export const ThemeContext = createContext(null);
function App() {
  let logo = "<AT/>";
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        {/* header start */}
        <div className="header">
          <div className="container">
            <div className="logo">{logo}</div>
            <nav>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
              <a className="a-icons" href="https://github.com/amrgx">
                <img src={github} alt="" />
              </a>
              <div className="actions">
                <img
                  onClick={toggleTheme}
                  src={theme === "light" ? lightIcon : Dark}
                  alt="asd"
                />
                <button className="downlad">
                  <span className="txtCv">Download CV</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
        {/* header end */}

        {/* hero start */}

        <div className="hero">
          <div className="hero-container">
            <div className="about-me-hero">
              <div className="text-aboutme">
                <h1 className="my-name">Hi, I’m Amr 👋</h1>
                <p className="p-aboutme">
                  I am a driven professional with abroad technical skillset. A
                  focused and detail-oriented Web Developer offering exceptional
                  troubleshooting skills and talent for developing innovative
                  solutions. I am successfully able to multi-task and work in
                  teams, meeting all project deadlines.
                </p>
              </div>
              <div className="location-avalible">
                <div className="location">
                  <img src={MySVGIcon} alt="" srcset="" />
                  <span className="loc-text">Giza, Egypt</span>
                </div>
                <div className="available">
                  <div className="online">
                    <span className="dot"></span>
                  </div>
                  <div className="online-tex ">Available for new projects</div>
                </div>
                <div className="social-icons">
                  <div className="icons-so">
                    <a className="a-icons " href="https://github.com/amrgx">
                      <img className="icon-color" src={github} alt="" />
                    </a>
                    <a
                      className="a-icons "
                      href="https://www.linkedin.com/in/amr-tarek-46a9791a9/">
                      <img className="icon-color" src={linkedin} alt="" />
                    </a>
                    <a
                      className="a-icons "
                      href="https://www.instagram.com/amrtarek698/?hl=en">
                      <img className="instagram" src={instagram} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="img-hero">
              <div className="pic-count">
                <div className="img-for-hero">
                  <div className="background"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* hero end */}

        {/* about start */}
        <div className="about">
          <div className="about-container">
            <div className="about-me-lab">
              <div className="btn">
                <span className="btn-text">About me</span>
              </div>
              <div className="pic-and-aboutme">
                <div className="pic-countainer">
                  <div className="pic-aboutme"></div>
                </div>
                <div className="about-me-section">
                  <h1 className="about-me-title">
                    Curious about me? Here you have it:
                  </h1>
                  <div className="p-countainer">
                    <p className="p-aboutme-section">
                      I'm a dedicated, self-professed designer who excels in
                      front-end development, primarily centered on React.js. I'm
                      fervent about breathing life into the technical and visual
                      facets of digital products, with a steadfast dedication to
                      user experience, meticulous design, and crafting code in
                      React.js that is both transparent, easy to read, and
                      exceptionally efficient.
                    </p>

                    <p className="p-aboutme-section">
                      I embarked on my path as a web developer in 2020, and ever
                      since, I've persevered in my growth as a developer,
                      embracing fresh challenges and staying updated with the
                      latest technologies. Now, in my early twenties, 4 years
                      following the commencement of my web development
                      expedition, I'm constructing state-of-the-art web
                      applications employing contemporary technologies, with
                      React leading the way."
                    </p>
                    <p className="p-aboutme-section">
                      I have a forward-thinking mindset and relish the
                      opportunity to work on products from concept inception
                      through to development
                    </p>
                    <p className="p-aboutme-section">
                      When I'm not fully immersed in developer mode, you can
                      find me active on LinkedIn observing the progress of early
                      startups, or simply enjoying some leisure time. Feel free
                      to follow me on LinkedIn where I share tech-related
                      insights and engage in building projects publicly.
                      Additionally, you can connect with me on GitHub and
                      LinkedIn
                    </p>
                    <p className="p-aboutme-section">
                      One more thing, I'm open to freelance opportunities, so
                      don't hesitate to get in touch and say hello! I assure
                      you, I'm friendly and approachable 😉.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* about end */}
        {/* skills start*/}
        <div className="skills">
          <div className="skills-container">
            <div className="heard-skills">
              <div className="skill-title">
                <div className="btn">
                  <span className="btn-text">Skills</span>
                </div>
              </div>
              <div className="hdeader-skills-title">
                <div className="text-skills">
                  The skills, tools and technologies I am really good at:
                </div>
              </div>
            </div>
            <div className="img-skills">
              <div className="skill">
                <Tec name={"Hmtl"} img={html} />
                <Tec name={"Css"} img={css} />
                <Tec name={"Js"} img={JS} />
                <Tec name={"React"} img={ReactIcon} />
                <Tec name={"Tailwindcss"} img={tailwindcss} />
                <Tec name={"Sass"} img={sass} />
                <Tec name={"Git"} img={Git} />
                <Tec name={"figma"} img={figma} />
              </div>
            </div>
          </div>
        </div>
        {/* skills end*/}

        {/* certifications start*/}
        <div className="certifications">
          <div className="certifications-countainer">
            <div className="row1">
              <div className="btn">
                <span className="btn-text">Experience</span>
              </div>
              <div className="row2">
                <div className="text-certifications">
                  Here is a quick summary of my most recent experiences:
                </div>
              </div>
            </div>

            <CertificationsCard
              icon={udacity}
              title={"Professional Front-End Web Development"}
              date={"May 25 - 2022"}
              p={`HTML and CSS for structuring and styling web content.
              JavaScript for adding interactivity and functionality to websites.
              Responsive web design to create sites that work on various devices.
              Version control with Git for managing and collaborating on code.
              Build tools to automate web development tasks.
              Web performance optimization techniques.
              Web accessibility principles for inclusivity.
              Front-end frameworks like React or Angular.
              Testing and debugging web applications.
              Progressive Web Apps (PWAs) for enhanced user experiences.
              Web security concepts to protect web applications.
              Web hosting and deployment on various platforms.
              Professional development practices, including collaboration and code reviews.`}
              cer={UdacityCer}
            />
            <CertificationsCard
              icon={Meta}
              title={"Introduction to Front-End Development"}
              date={"Feb 15 - 2023"}
              p={`I've learned to distinguish between front-end, back-end, and full-stack developers. I can now create and style webpages with HTML and CSS. I also understand the advantages of using UI frameworks for efficient front-end development`}
              cer={Introduction}
            />
            <CertificationsCard
              icon={Meta}
              title={"HTML and CSS in depth"}
              date={"Jul 27 - 2023"}
              p={`I've learned to create responsive forms and layouts using HTML5 and CSS, design user interfaces with Bootstrap, and effectively implement debugging tools, all through the HTML and CSS in-depth certificate`}
              cer={HtmlCss}
            />

            <CertificationsCard
              icon={Meta}
              title={"Version Control"}
              date={"Apr 13 - 2023"}
              p={`I've acquired the skills to implement Version Control systems, effectively navigate and configure the command line, and use GitHub for repository management and code revision control, all through the Version Control certificate`}
              cer={VersionControl}
            />
          </div>
        </div>

        {/* certifications end*/}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
