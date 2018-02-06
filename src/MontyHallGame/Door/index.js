import React, { Component } from 'react';
import s from './Door.css';

class Door extends Component {
  constructor(props) {
      super(props);
      this.state = {}
   }

  render() {
    return (
      <div class={s.wrapper} className={this.props.classes}>
        <div class={s.door}>
        </div>
      </div>
    )
  }
}

export default Door;
