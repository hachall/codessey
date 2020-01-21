import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch, withRouter } from 'react-router-dom';


import NavBar from './navbar'
import Footer from './footer'
import ComingSoon from './coming_soon'

import routes from './routes'

class Router extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentDidMount() {
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
    const isMobile = width <= 769;
    const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
    return(
      <BrowserRouter>
        {/*<ComingSoon />*/}
        <NavBar/>
          <Switch>
            {routeComponents}
          </Switch>
        {/*<Footer/>*/}
      </BrowserRouter>

    )
  }
}

export default Router;
