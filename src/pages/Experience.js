import "./Experience.css";
import Navbar from "./Navbar";

import ojt1 from "../img/OJT1.jpg";
import ojt2 from "../img/OJT2.jpg";
import ojt3 from "../img/OJT3.jpg";
import ojt4 from "../img/OJT4.jpg";
import ojt5 from "../img/OJT5.jpg";
import ojt6 from "../img/OJT6.jpg";

const Experience = () => {
  return (
    <>
      <Navbar />

      <section id="portfolio">
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
            <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
          </g>
          <g className="wave3">
            <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
          </g>
        </svg>
        <div className="container mt-1">
          <div className="pb-5 mt-"></div>
          <h1 className="fw-bold display-2 text-center mt-0 pt-1">
            <i>Experienced</i>
          </h1>
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
            <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
          </g>
          <g className="wave3">
            <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
          </g>
        </svg>

        <section id="photos">
          <div className="container">
            <div className="row justify-content-center mt-5">
              <div className="card align-items-center">
                <h4 className="ms-3 mt-3">On The Job Training (OJT)</h4>
              </div>
              <section id="info">
                <div className="container">
                  <div className="row">
                    <div className="col-lg mb-1 mt-3">
                      <div className="card p-3 shadow">
                        <h4 className="text-center">
                          {" "}
                          <i>
                            <strong>OCTOBER</strong>
                          </i>
                        </h4>
                        <h5 className="text text-center">Activities</h5>

                        <div className="col text-center">
                          <img src={ojt2}></img>
                          <img src={ojt3}></img>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg mb-3 mt-5">
                      <div className="card p-1 shadow">
                        <h4 className="text-center">
                          {" "}
                          <i>
                            <strong>NOVEMBER</strong>
                          </i>
                        </h4>
                        <h5 className="text text-center">Activities</h5>
                        <div className="col text-center">
                          <img src={ojt1}></img>
                          <img src={ojt4}></img>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg mb-3 mt-3">
                      <div className="card p-3 shadow">
                        <h4 className="text-center">
                          {" "}
                          <i>
                            <strong>DECEMBER-JANUARY</strong>
                          </i>
                        </h4>
                        <h5 className="text text-center">Activities</h5>
                        <div className="col text-center">
                          <img src={ojt5}></img>
                          <img src={ojt6}></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </section>

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
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>
      <section id="info2">
        <div className="container text-center">
          <div className="col mb-3 mt-5">
            {" "}
            <div className="card align-items-center">
              <h4 className="ms-3 mt-3">
                Activities during On The Job Training (OJT)
              </h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div className="card p-1 shadow">
                    <h4 className="text-center">Printing </h4>
                    <p className="text-secondary">
                      At The office of College of Arts and Sciences we do the
                      printing of documents, papers for students, questionaires
                      for exam, class attendance and sylllabus for the teachers.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div className="card p-1 shadow">
                    <h4 className="text-center">
                      Assisting Students inquiries
                    </h4>
                    <p className="text-secondary">
                      Inside the office we also asssits the students for their
                      personal inquiries about theire grades, clearance,
                      registration forms and birth certificates.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div className="card p-1 shadow">
                    <h4 className="text-center">Networking</h4>
                    <p className="text-secondary">
                      We plan for the networking design for the Statistic
                      laboratory. We plan the topology we are going to use and
                      measure the utp cables. we also do the canvacing of Rg45,
                      routers and switches.
                    </p>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="col-lg mb-3 mt-3"></div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span>
              <a href=""> atanganmea@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Experience;
