import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import NeighborhoodMap from './NeighborhoodMap.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        
        <Route path='/' exact render={() => (
          <Main />              
        )}/>

        <Route path='/neighborhood-map' exact render={() => (
          <NeighborhoodMap />
        )}/>

        <Route path='/arcade-game' exact render={() => (
          <div></div>
        )}/>

        <Route path='/memory-game' exact render={() => (
          <div></div>
        )}/>

        <Route path='/pixel-art-maker' exact render={() => (
          <div></div>
        )}/>

        <Route path='/myreads' exact render={() => (
          <div></div>
        )}/>

        <Route path='/contact' exact render={() => (
          <div></div>
        )}/>

        <Footer />
      </div>
    );
  }
}

export default App;
