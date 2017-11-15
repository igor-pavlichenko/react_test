import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInformation from './UserInformation';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // 
      user: null,
    }
  }

  getUserInformation() {
    /*
      TODO: fetch a user from the GitHub API

      TIPS:
       1) The Fetch API provides an interface for
         fetching resources (including across the network).
       2) Maybe you want to update the state here.
    */

    // github credentials
    const clientId = 'd68a7c11a33ebe6edc8c';
    const clientSecret = 'abd467510a662c60a7561db8cd6ac0279b9ebbc2';

    const baseUrl = 'http://api.github.com/users/';
    const username = 'gaearon';

    // make the request
    fetch(baseUrl + username
      + '?client_id=' + clientId
      + '&client_secret=' + clientSecret)
      .then(res => res.json())
      .then(json => {
        console.log('github response: ', json);
        // update state with fetched json
        this.setState({ user: json });
      }).catch(err => console.warn('fetch error: ', err));
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
          <UserInformation user={this.state.user} />
        }
      </div>
    );
  }
}

export default App;
