import React, { Component } from 'react';
import s from './App.css';

import Header from './../Header';
import Footer from './../Footer';
import MontyHallGame from './../MontyHallGame';

class App extends Component {
  render() {
    return (
      <div class={s.wrapper}>
        <Header
          title="Monty Hall React App"
        />
        
        <div class={s.intro}>
          <MontyHallGame />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
