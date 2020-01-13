import React, { Component} from 'react';
import { Link} from 'react-router-dom';
import { FaLaptopCode } from "react-icons/fa";
import { FaDna } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

class Footer extends Component {


  render() {
    return (
      <div className="footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3e4478" fill-opacity="1" d="M0,96L120,122.7C240,149,480,203,720,213.3C960,224,1200,192,1320,176L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        <div className="footer-rest">
          <div className="footer-left">
            <img className="footer-logo" src="assets/images/Codessey-Transparency2.png" alt=""/>
            <div className="footer-connect">
              <h4>Links</h4>




              <div><a href="/python-course" className="footer-link">Course</a></div>
              <div><a href="/tutors" className="footer-link">Tutors</a></div>
              <div><a href="/tech-network" className="footer-link">Network</a></div>
              <div><a href="/contact" className="footer-link">Contact</a></div>
            </div>
            <div className="footer-connect">
              <h4>Connect</h4>
              <div className="social-media-icons">
                <FaFacebookSquare className="footer-icon"/>
                <FaLinkedin className="footer-icon"/>
              </div>
              <div>info@codessey.co.uk</div>
            </div>
          </div>
          <div className="footer-right">
            © Codessey ltd 2019 | All Rights Reserved
          </div>
        </div>
      </div>

    )
  }
}

export default Footer;
