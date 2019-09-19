import React, { Component } from 'react';

class Home extends Component {

  render() {
    const style = {
      backgroundImage: `url('assets/images/undraw_pair_programming_njlp.svg')`
    }

    return(
      <div className="home">
        <div className="parallax-container">
          <div className="parallax-inner">
          </div>
        </div>

        <div className="home-left">
          <div className="home-title-box">
            <div className="home-title">
              <span className="orange-bracket bracket-offset">{'{'}</span>{" Programming and computer science tutors to your door "}<span className="orange-bracket">{'}'}</span>
            </div>
            <div className="home-desc">
              Become a python programmer with our Beginners course, or blah blah expert tutors etc
            </div>
            <div className="home-btns">
              <div className="home-btn home-pink">Course Details</div>
              <div className="home-btn home-orange">Enquire</div>
            </div>
          </div>

        </div>
        <div className="home-right">
          <img className="home-img" src="assets/images/undraw_pair_programming_njlp.svg" alt=""/>
        </div>

      </div>
    )
  }
}

export default Home;
