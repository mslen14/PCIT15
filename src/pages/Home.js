import "./Home.css";
import Navbar from "./Navbar";

import mine from "../images/mslen.jpg";

const Home = () => {
  return (
    <>
      <Navbar />

      <div id="banner" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ok">
              <div className="zoom-fade-in">
                <center>
                  <div className="card">
                    <div className="text">
                      <h1 className="text text-light display-4 fw-bold">
                        Hello, My name is
                      </h1>
                      <h1 className="text name display-4 fw-bold">
                        Jessielen Magno Daguia
                      </h1>
                      <br />
                      <p className="self text-light">
                        I'm a freshmen graduate
                        with the degree of Bachelor of Science Information Technology. 
                        Willing to learn and participate with your beloved company.
                         My expertise is to create
                        <br /> a website design,graphic design, and many
                        more....
                      </p>
                    </div>
                    <a href="/about" className="btn btn-brand shadow">
                      Hire Me
                    </a>
                  </div>
                </center>
              </div>
            </div>
            <div className="col-lg-4 ok mb-5">
              <div className="zoom-fade-in">
                <center>
                  <img src={mine} width={300} />
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; Copyright By:
              <a href="/" className="ms-2">
                <span>Jessielen M. Daguia</span>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
