import "./Portfolio.css";
import Navbar from "./Navbar";

import D from "../images/en.jpg";
import A from "../images/si.jpg";
import G from "../images/en.jpg";
import U from "../images/je.jpg";
import I from "../images/si.jpg";
import S from "../images/je.jpg";

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
              <h2>Can Be Captured :</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={D} alt="one" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={A} alt="two" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={G} alt="three" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={U} alt="four" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={I} alt="five" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={S} alt="six" />
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
