import React, { Component } from 'react';

import PlotComponent from './containers/plot';
import Header from './components/header';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Header />
        <div className="content">
          <PlotComponent></PlotComponent>
        </div>
      </div>
    );
  }
}

export default App;
