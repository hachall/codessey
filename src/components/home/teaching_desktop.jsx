import React, { Component } from 'react';
import { FaLaptopCode } from "react-icons/fa";
import { FaDna } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";


class TeachingDesktop extends Component {

  render() {



    return (
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
    )
  }
}
export default TeachingDesktop;
