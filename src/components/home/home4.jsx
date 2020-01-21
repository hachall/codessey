import React, {Component} from 'react';
import { Link} from 'react-router-dom';

import TeachingDesktop from './teaching_desktop';
import TeachingMob from './teaching_mob';

class Home4 extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };


  render() {
    const { width } = this.state;
    const isMobile = width <= 600;

    return (
       <div className="home-section-4">
          <div className="section-4-box">
            <h3 className="or-title"><span className="pink-font">OR</span>...</h3>
            <h3 className="or-title">our expert tutors can also teach:</h3>

            {(isMobile) ?  <TeachingMob/> : <TeachingDesktop/>}
            {/*<TeachingDesktop/>*/}

            <div className="arrow-section">
              <img className="curved-arrow" src="https://codessey.s3.eu-west-2.amazonaws.com/graphics/curve-arrow.svg" alt=""/>
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
