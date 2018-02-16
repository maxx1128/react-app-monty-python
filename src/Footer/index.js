import React, { Component } from 'react';
import s from './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className={s.container}>
        Created by <a href="http://maxwellantonucci.com/" target="_blank" rel="noopener noreferrer">Max Antonucci</a>. Visit the <a href="https://github.com/maxx1128/react-app-monty-python" target="_blank" rel="noopener noreferrer">app's repo here</a>.
      </footer>
    )
  }
}

export default Footer;
