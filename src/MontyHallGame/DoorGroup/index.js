import React, { Component } from 'react';
import s from './DoorGroup.css';

import Door from './../Door';

class DoorGroup extends Component {

  render() {
    return (
      <div class={s.wrapper}>
        <Door classes={s.door} />
        <Door classes={s.door} />
        <Door classes={s.door} />
      </div>
    )
  }
}

export default DoorGroup;
