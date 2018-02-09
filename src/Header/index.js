import React, { Component } from 'react';
import logo from './../logo.svg';
import s from './Header.css';

class Header extends Component {
  render() {
    return (
      <header className={s.container}>
        <img src={logo} className={s.logo} alt="logo" />
        <h1>
          {this.props.title}
        </h1>
      </header>
    )
  }
}

export default Header;
