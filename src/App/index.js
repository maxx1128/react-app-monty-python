import React, { Component } from 'react';
import s from './App.css';

import Header from './../Header';
import Footer from './../Footer';
import MontyHallGame from './../MontyHallGame';

class App extends Component {
  render() {
    return (
      <div className={s.wrapper}>
        <Header
          title="Monty Hall React App"
        />
        
        <div className={s.intro}>
          <MontyHallGame />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
