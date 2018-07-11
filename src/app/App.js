import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    values: 'Fill in form and click Submit to see values'
  }

  render() {
    return (
      <div className="App">
        <h2>Your project is working!</h2>
        <h3>Let's lean Redux Form</h3>
      </div>
    );
  }
  
}

export default App;
