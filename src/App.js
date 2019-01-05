import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// List Item Component
class ListItem extends Component {
  render() {
    return (
      <li className="listitem">
        {/* TODO */}
      </li>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2> THREAD STORY </h2>
          <a
            className="App-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thread Story
          </a>
        </header>
      </div>
    );
  }
}

export default App;
