import React, { Component } from 'react';


import Home1 from './home1'
import Home2 from './home2'
import Home3 from './home3'
import Home4 from './home4'

import HomeCarousel from './home_carousel'
import SimpleSlider from './careers_carousel'
import Footer from '../footer'

class Home extends Component {

  render() {


    return (
      <div>

        <Home1 />

        <Home2 />

        <Home3 />

        <Home4 />

        <Footer />


      </div>
    )
  }
}

export default Home;
