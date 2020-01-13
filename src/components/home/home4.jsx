import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { FaLaptopCode } from "react-icons/fa";
import { FaDna } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

class Home4 extends Component {


  render() {

    return (
       <div className="home-section-4">
          <div className="section-4-box">
            <h3 className="or-title"><span className="pink-font">OR</span>...</h3>
            <h3 className="or-title">our expert tutors can also teach:</h3>
            <div className="teaching-options">
              <div className="alt-teaching">
                <div className="flex-container">
                  <div className="teaching-img-box">
                    <FaLaptopCode className="teaching-icon"/>
                  </div>

                </div>
                <div className="teaching-text">
                  Computer Science
                </div>
              </div>
              <div className="alt-teaching">
                <div className="flex-container">
                  <div className="teaching-img-box">
                    <FaCalculator className="teaching-icon"/>
                  </div>

                </div>
                <div className="teaching-text">
                  Maths
                </div>
              </div>
              <div className="alt-teaching">
                <div className="flex-container">
                  <div className="teaching-img-box">
                    <FaDna className="teaching-icon"/>
                  </div>

                </div>
                <div className="teaching-text">
                  Sciences
                </div>
              </div>
              <div className="alt-teaching">
                <div className="flex-container">
                  <div className="teaching-img-box">
                    <FaChalkboardTeacher className="teaching-icon"/>
                  </div>

                </div>
                <div className="teaching-text">
                  And Others (Please Enquire)
                </div>
              </div>
            </div>

            <div className="arrow-section">
              <img className="curved-arrow" src="assets/images/curve-arrow.svg" alt=""/>
            </div>

            <div className="enquire-section">
              <Link to="/contact">
                <div className="home-btn home-orange home-bottom-btn">Get in Contact</div>
              </Link>
            </div>
          </div>

        </div>

    )
  }
}

export default Home4;
