import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    user: {},
    active: false
  }
  
  handleClick = () => {
    console.log("Fetching")
    fetch('https://api.github.com/users/nlhowell12')
      .then(response => response.json())
      .then(data => {
        this.setState({user: data})
      }) 
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Get User Data</button>
        {this.state.user.avatar_url && 
        <div>
          <img src={`${this.state.user.avatar_url}`} alt="This is me"/>
          <p>{this.state.user.name}</p>
          <p>{this.state.user.location}</p>
          <p>{this.state.user.bio}</p>
        </div>
        }  
      </div>
    );
  }
}

export default App;
