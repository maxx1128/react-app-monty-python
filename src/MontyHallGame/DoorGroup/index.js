import React, { Component } from 'react';
import Door from './../Door';
import s from './DoorGroup.css';

class DoorGroup extends Component {
  renderDoor(i) {
    const { winning_door, selected_door, turn, opened_door, click_event } = this.props,
          winning = (winning_door === i),
          selected = (selected_door === i),
          cursor = (turn === 0),
          opened = (turn === 2) ? true : (opened_door === i);

    return (
      <Door
        number={i}
        winning={winning}
        selected={selected}
        opened={opened}
        cursor={cursor}
        onClick={click_event}
      />
    )
  }

  render() {
    return (
      <div className={s.wrapper}>
        {this.renderDoor(0)}
        {this.renderDoor(1)}
        {this.renderDoor(2)}
      </div>
    )
  }
}

export default DoorGroup;