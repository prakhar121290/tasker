import React from 'react';

const styles = {
  loginStyle: {
    textAlign: 'center',
    marginTop: '200px'
  }
}

export default class HomeView extends React.Component {
  render() {
    return (
      <div style={styles.loginStyle}>
        <div>Login to continue</div>
        <a href="https://github.com/login/oauth/authorize?client_id=77f0c1f303d2e8c07120">
          <img src="/icons/GitHub_Logo.png" width="100px"/>
        </a>
      </div>
    );
  };
}
