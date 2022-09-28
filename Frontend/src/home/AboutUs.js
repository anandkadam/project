import React from "react";
import anand from "../images/anand.jpg";
import shivkumar from "../images/shivkumar.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div class="container1 aboutus">
        <div class="row">
          <div class="col-md-12">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>



              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area">
                    <img src={anand} alt="anand" />
                  </div>
                  <div className="img-text">
                    <h2>Anand Kadam</h2>
                    <p>
                      Hi, I'm Anand Kadam. I'm currently pursuing Post Graduate
                      Diploma from IACSD, Pune and my role in the project
                      is backendend as well as frontend developer.
                    </p>
                  </div>
                </div>
              </div>




              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area">
                    <img src={shivkumar} alt="shiv" />
                  </div>
                  <div className="img-text">
                    <h2>Shivkumar Tekale</h2>
                    <p>
                      Hi I'm Shivkumar Tekale. I'm currently pursuing Diploma
                      in IACSD Pune, and my role in the project is backend
                      developer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutUs;
