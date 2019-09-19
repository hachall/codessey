import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import DesktopNav from './desktop_nav'

import routes from './routes'

class Router extends Component {

  render() {
    const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
    return(
      <BrowserRouter>
        <DesktopNav/>
          <Switch>
            {routeComponents}
          </Switch>
      </BrowserRouter>

    )
  }
}

export default Router;
