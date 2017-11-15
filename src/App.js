import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInformation from './UserInformation';
import Repos from './Repos';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      repos: [],
    }

    // github credentials
    this.clientId = 'd68a7c11a33ebe6edc8c';
    this.clientSecret = 'abd467510a662c60a7561db8cd6ac0279b9ebbc2';

    this.baseUrl = 'http://api.github.com/users/';
    this.username = 'gaearon';
  }

  getUserInformation() {
    /*
      TODO: fetch a user from the GitHub API

      TIPS:
       1) The Fetch API provides an interface for
         fetching resources (including across the network).
       2) Maybe you want to update the state here.
    */

    // make the request
    fetch(this.baseUrl + this.username
      + '?client_id=' + this.clientId
      + '&client_secret=' + this.clientSecret)
      .then(res => res.json())
      .then(json => {
        console.log('github response: ', json);
        // update state with fetched json
        this.setState({ user: json });
        // fetch user's repos
        this.getUserRepos();
      }).catch(err => console.warn('fetch user error: ', err));
  }

  getUserRepos = () => {
    // make the request
    fetch(this.baseUrl + this.username
      + '/repos?client_id=' + this.clientId
      + '&client_secret=' + this.clientSecret
      + '&sort=updated&direction=desc'
    )
      .then(res => res.json())
      .then(json => {
        console.log('repos: ', json);
        // update state with fetched json
        this.setState({ repos: json });
      }).catch(err => console.warn('fetch repos error: ', err));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-intro">
          <hr />
          <p>Click on the button to fetch the user information</p>
          {!this.state.user &&
            <button onClick={this.getUserInformation.bind(this)}>
              Click me
            </button>
          }
        </div>
        {this.state.user &&
          <div className="main-container">
            <UserInformation user={this.state.user} />
            <Repos repos={this.state.repos} />
          </div>
        }
      </div>
    );
  }
}

export default App;
