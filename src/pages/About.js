import "./About.css";
import "./Education.css";
import Navbar from "./Navbar";

import jes from "../images/len.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnity,
  faGithub,
  faSpotify,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
          <div class="container2">
            <div class="bubble">
              <span class="circled" style={{ "--i": 11 }}></span>
              <span class="circled" style={{ "--i": 12 }}></span>
              <span class="circled" style={{ "--i": 24 }}></span>
              <span class="circled" style={{ "--i": 10 }}></span>
              <span class="circled" style={{ "--i": 14 }}></span>
              <span class="circled" style={{ "--i": 23 }}></span>
              <span class="circled" style={{ "--i": 18 }}></span>
              <span class="circled" style={{ "--i": 19 }}></span>
              <span class="circled" style={{ "--i": 20 }}></span>
              <span class="circled" style={{ "--i": 22 }}></span>
              <span class="circled" style={{ "--i": 25 }}></span>
              <span class="circled" style={{ "--i": 18 }}></span>
              <span class="circled" style={{ "--i": 21 }}></span>
              <span class="circled" style={{ "--i": 15 }}></span>
              <span class="circled" style={{ "--i": 13 }}></span>
              <span class="circled" style={{ "--i": 28 }}></span>
              <span class="circled" style={{ "--i": 19 }}></span>
              <span class="circled" style={{ "--i": 18 }}></span>
              <span class="circled" style={{ "--i": 14 }}></span>
              <span class="circled" style={{ "--i": 20 }}></span>
              <span class="circled" style={{ "--i": 22 }}></span>
              <span class="circled" style={{ "--i": 17 }}></span>
              <span class="circled" style={{ "--i": 12 }}></span>
              <span class="circled" style={{ "--i": 13 }}></span>
              <span class="circled" style={{ "--i": 16 }}></span>
              <span class="circled" style={{ "--i": 14 }}></span>
              <span class="circled" style={{ "--i": 17 }}></span>
              <span class="circled" style={{ "--i": 13 }}></span>
              <span class="circled" style={{ "--i": 28 }}></span>
              <span class="circled" style={{ "--i": 19 }}></span>
              <span class="circled" style={{ "--i": 18 }}></span>
              <span class="circled" style={{ "--i": 17 }}></span>
              <span class="circled" style={{ "--i": 13 }}></span>
              <span class="circled" style={{ "--i": 28 }}></span>
              <span class="circled" style={{ "--i": 19 }}></span>
              <span class="circled" style={{ "--i": 18 }}></span>
              <span class="circled" style={{ "--i": 20 }}></span>
              <span class="circled" style={{ "--i": 16 }}></span>
              <span class="circled" style={{ "--i": 14 }}></span>
              <span class="circled" style={{ "--i": 17 }}></span>
              <span class="circled" style={{ "--i": 16 }}></span>
              <span class="circled" style={{ "--i": 14 }}></span>
              <span class="circled" style={{ "--i": 17 }}></span>
              <span class="circled" style={{ "--i": 16 }}></span>
              <span class="circled" style={{ "--i": 14 }}></span>
              <span class="circled" style={{ "--i": 17 }}></span>
            </div>

            <div id="about-info" className="bg-secondary bg-gradient">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      About
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="air-waves"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="wave1">
              <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
            </g>
            <g className="wave2">
              <use
                href="#wave-path"
                x="50"
                y="0"
                fill="rgba(255,255,255, .5)"
              />
            </g>
            <g className="wave3">
              <use
                href="#wave-path"
                x="50"
                y="9"
                fill="rgba(255,255,255, .3)"
              />
            </g>
          </svg>
        </div>
      </div>

      <section id="carton">
        <div className="container mt-5">
          <div className="col">
            <div className="card p-5 shadow">
              <div className="row">
                <div className="col-lg-7 text">
                  <h4 className="text-secondary"><i><b>About Me </b></i></h4>
                  <p>
                    I am asimple college student pursuing a
                    Bachelor of Science in Information Technology (BSIT) at
                    Central Philippines State University. 
                  </p>
                  <p>"Unlocking potential and chasing dreams Where every class is a step towards your future."
                     "Beyond books: experiences, growth, and discovery.Crafting your story, one semester at a time.</p>
                    <p> Navigating challenges, celebrating successes. Where learning and life intersect and Dare to be different, strive to excel.
                     Knowledge, friendships, and unforgettable moments. From freshman jitters to graduation cheers."
                     Building a future, embracing the present.</p>
                 <h4 className="text-secondary"><i> <b>Academic Journey</b> </i></h4>
                  <p>
                    During my time at the College of Computer Studies, I have
                    gained valuable knowledge in programming languages such as
                    C++, Web development, and JavaScript.
                  </p>
                </div>
                <div className="col-lg-5 mb-5">
                  <center>
                    <img src={jes}
                      alt="Jessielen Daguia"
                    />
                  </center>
                  <center>
                    <div className="card box">
                      <div className="row p-2">
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faUnity} />
                        </div>
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faGithub} />
                        </div>
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faGamepad} />
                        </div>
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faSpotify} />
                        </div>
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faSteam} />
                        </div>
                      </div>
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="pb-5 pt-5">
        <div className="container mt-3">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center"></div>
          </div>
        </div>
      </section>

      <section id="education" class="education">
        <div class="section-heading text-center mb-5">
          <h2>Education</h2>
        </div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2024</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                        Central Philippines State University
                      </h4>
                      <p className="text-secondary">
                        Brgy. Oringao, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2019</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                        Guilungan National High School - Talacdan Extension
                      </h4>
                      <p className="text-secondary">
                        Brgy. Talacdan Cauayan, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2014</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">Talacdan Elementary School</h4>
                      <p className="text-secondary">
                        Brgy. Talacdan Cauayan, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skill" className="bg-secondary">
        <svg
          className="heat-waves"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="heat-wave1">
            <use href="#wave-path" x="50" y="3" fill="rgb(108,117,125)" />
          </g>
          <g className="heat-wave2">
            <use href="#wave-path" x="50" y="0" fill="rgba(108,117,125, .5)" />
          </g>
          <g className="heat-wave3">
            <use href="#wave-path" x="50" y="9" fill="rgba(108,117,125, .3)" />
          </g>
        </svg>
        <div className="col skills">
          <h2 className="text-center mt-5 mb-5">Skills</h2>
          <div class="row justify-content-center">
            <div class="col-lg-4 mb-4">
              <h5 class="card-title fw-bold text-center mt-5">HTML</h5>
              <p className="text-center">50%</p>
              <span class="bar">
                <span class="html"></span>
              </span>

              <h5 class="card-title fw-bold text-center mt-5">CSS</h5>
              <p className="text-center">70%</p>
              <span class="bar">
                <span class="css"></span>
              </span>
            </div>
            <div class="col-lg-4 mb-4">
              <h5 class="card-title fw-bold text-center mt-5">JAVASCRIPT</h5>
              <p className="text-center">40%</p>
              <span class="bar">
                <span class="javascript"></span>
              </span>

              <h5 class="card-title fw-bold text-center mt-5">PHP</h5>
              <p className="text-center">50%</p>
              <span class="bar">
                <span class="php"></span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span> Copyright By
              <a href=""> Ms_Len</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
                 