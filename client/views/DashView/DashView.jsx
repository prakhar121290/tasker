import React from 'react';
import NavBar from '../../components/NavBar';

export default class DashView extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <small>This is the DashView.</small>
      </div>
    );
  }
}
