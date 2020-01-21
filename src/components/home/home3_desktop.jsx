import React, { Component } from 'react';

import SimpleSlider from './careers_carousel'


class Home3Desktop extends Component {


  render() {

    return (
      <div className="home-section-3">
        <div className="section-3-title">
          <div>Pave the way for <span className="orange">careers</span> in:</div>
        </div>
        <div className="careers-carousel">
          <SimpleSlider/>

        </div>
      </div>

    )
  }
}
export default Home3Desktop;
