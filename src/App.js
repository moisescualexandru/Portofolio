import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import NeighborhoodMap from './NeighborhoodMap.js';
import ArcadeGame from './ArcadeGame.js';
import MemoryGame from './MemoryGame.js';
import Pixel from './Pixel.js';
import MyReads from './MyReads.js';
import About from './About.js';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Nav />
        
        <Route path='/' exact render={() => (
          <Main />              
        )}/>

        <Route path='/neighborhood-map' exact render={() => (
          <NeighborhoodMap />
        )}/>

        <Route path='/arcade-game' exact render={() => (
          <ArcadeGame />
        )}/>

        <Route path='/memory-game' exact render={() => (
          <MemoryGame />
        )}/>

        <Route path='/pixel-art-maker' exact render={() => (
          <Pixel />
        )}/>

        <Route path='/myreads' exact render={() => (
          <MyReads />
        )}/>

        <Route path='/about' exact render={() => (
          <About />
        )}/>

        <Footer />
      </div>
    );
  }
}

export default App;
