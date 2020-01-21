import React, {Component} from 'react';
import { Link} from 'react-router-dom';

class Home1 extends Component {


  render() {

    return (
      <div className="home">

        {/*<div className="parallax-container">
          <div className="parallax-inner">
          </div>
        </div>*/}

        <div className="home-left">
          <div className="home-title-box">
            <div className="home-title">
              <span className="orange-bracket bracket-offset">{'{'}</span>{" Python Tutoring:\n Beginner to Beyond "}<span className="orange-bracket">{'}'}</span>
            </div>
            <div className="home-desc">
              Expert programming and computer science tutors to your door
            </div>
            <div className="home-btns">
              <Link to="/python-course">
                <div className="home-btn home-pink">Course Details</div>
              </Link>
              <Link to="/contact">
                <div className="home-btn home-orange">Enquire</div>
              </Link>
            </div>
          </div>
        </div>

        <div className="home-right">
          <img className="home-img" src="https://codessey.s3.eu-west-2.amazonaws.com/graphics/undraw_pair_programming_njlp.svg" alt=""/>
        </div>

      </div>

    )
  }
}

export default  Home1;
