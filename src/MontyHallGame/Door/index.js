import React, { Component } from 'react';
import s from './Door.css';

class Door extends Component {
  constructor(props) {
      super(props);
      this.state = {
        revealed: false
      }
  }

  render() {

    const winner   = this.props.winning ? 'Winner' : 'Loser',
          selected = this.props.selected ? 'Selected' : '',
          opened   = this.props.opened ? 'Opened' : '';

    return (
      <div className={s.wrapper} onClick={() => this.props.onClick(this.props.number)}>
        <div className={s.door}>
          <p>
            {winner}
          </p>

          <p>
            {selected}
          </p>

          <p>
            {opened}
          </p>
        </div>
      </div>
    )
  }
}

export default Door;
