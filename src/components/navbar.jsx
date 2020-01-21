import React, { Component } from 'react'

import DesktopNav from './nav_desktop'
import NavMobile from './nav_mobile'

class NavBar extends Component {
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
    const isMobile = width <= 740;


    if (isMobile) {
      return (
        <NavMobile />
      );
    } else {
      return (
        <DesktopNav />
      );
    }
  }
}

export default NavBar;
