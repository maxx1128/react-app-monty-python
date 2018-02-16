import React, { Component } from 'react';
import s from './Header.css';

class Header extends Component {
  render() {
    return (
      <header className={s.container}>
        <h1>
          {this.props.title}
        </h1>
      </header>
    )
  }
}

export default Header;
