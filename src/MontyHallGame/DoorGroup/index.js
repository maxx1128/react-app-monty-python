import React, { Component } from 'react';
import Door from './../Door';
import s from './DoorGroup.css';

class DoorGroup extends Component {
  renderDoor(i) {
    const winning = (this.props.winning_door === i),
          selected = (this.props.selected_door === i),
          cursor = (this.props.turn === 0),
          opened = (this.props.turn === 2) ? true : (this.props.opened_door === i);

    return (
      <Door
        number={i}
        winning={winning}
        selected={selected}
        opened={opened}
        cursor={cursor}
        onClick={this.props.click_event}
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