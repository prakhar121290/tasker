import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Router, Route, hashHistory} from 'react-router';

import HomeView from './views/HomeView';

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/" component={HomeView} />
    </Router>
  </MuiThemeProvider>, document.getElementById('content')
);
