const css = require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Page from './page';
import Ekkomedia from './ekkomedia/ekkomedia';


ReactDOM.render(
  <Ekkomedia />,
  document.getElementById('root')
);
