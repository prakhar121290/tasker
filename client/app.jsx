import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';

ReactDOM.render(
  <MuiThemeProvider>
    <div>
      <AppBar title="React Hot Boilerplate" />
      <h1>Hello, Material!</h1>
    </div>
  </MuiThemeProvider>, document.getElementById('content'));
