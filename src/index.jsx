import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
// import '../assets/fonts/Gilroy-Bold.woff';

import Router from './components/router';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Router/>, root);
}
