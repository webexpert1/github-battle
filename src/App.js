import React, { Component } from 'react';
import Popular from './components/Popular';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="container">
        <Popular />
      </main>
    );
  }
}

export default App;
