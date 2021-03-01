import React, { Component } from 'react';


import './App.scss';

class App extends Component {
  state = {
    authUser: false,
    showResult: false,
    user: ''
  };
  handleLogin = user => {
    this.setState({
      authUser: true,
      user
    });
  };
  handleLogout = () => {
    this.setState({ authUser: false });
  };
  render () {
    return (
      <div className="App">
        this is Would You Rather
      </div>
    );
  }
}

export default App;
