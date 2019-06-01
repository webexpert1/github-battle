import React, { Component } from 'react';
import Popular from './components/Popular';

import './App.css';
import Battle from './components/Battle';

class App extends Component {
  render() {
    return (
      <main className="container">
        <Battle />
      </main>
    );
  }
}

export default App;
