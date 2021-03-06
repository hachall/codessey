import React, {Component} from 'react';

import Home2Desktop from './home2_desktop'
import Home2Mobile from './home2_mobile'

class Home2 extends Component {

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
    const isMobile = width <= 700;

      if (isMobile) {
        return (
          <Home2Mobile/>
        );
      } else {
        return (
          <Home2Desktop/>
        );
      }



  }
}

export default Home2;
