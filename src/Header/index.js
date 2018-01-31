import React, { Component } from 'react';
import logo from './../logo.svg';
import s from './Header.css';

class Header extends Component {
  render() {
    return (
      <header class={s.container}>
        <img src={logo} class={s.logo} alt="logo" />
        <h1>
          {this.props.title}
        </h1>
      </header>
    )
  }
}

export default Header;
