import React, { Component } from 'react';
import logo from './../logo.svg';
import Footer from './../Footer';
import s from './App.css';

class App extends Component {
  render() {
    return (
      <div class={s.wrapper}>
        <header class={s.header}>
          <img src={logo} class={s.logo} alt="logo" />
          <h1 class={s.title}>Welcome to React</h1>
        </header>
        <p class={s.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Footer />
      </div>
    );
  }
}

export default App;
