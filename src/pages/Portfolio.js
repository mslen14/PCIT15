import "./Portfolio.css";
import Navbar from "./Navbar";

import J from "../images/me.jpg";
import Y from "../images/web.jpg";
import S from "../images/graphic.jpg";
import I from "../images/pretty.jpg";
import E from "../images/SS.jpg";
import L from "../images/mul.jpg";

const Portfolio = () => {
  return (
    <>
      <Navbar />

      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="container">
            <div className="row">
              <h1></h1>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-heading padd-15">
              <h2>My Design :</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={J} alt="one" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={Y} alt="two" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={S} alt="three" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={I} alt="four" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={E} alt="five" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={L} alt="six" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; Copyright By:
              <a href="/" className="ms-2">
                <span>Jessielen Daguia</span>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
