import React, { Component } from 'react';
import s from './Door.css';

class Door extends Component {
  constructor(props) {
      super(props);
      this.state = {
        revealed: false
      }
  }

  winning_door = () => {
    return (this.props.number === this.props.winning_door) ? true : false;
  }

  selected_door = () => {
    return (this.props.number === this.props.selected_door) ? true : false;
  }

  opened_door = () => {
    return ( (this.props.turn === 2) || (this.props.turn === 1 && this.selected_door()) ) ? true : false;
  }

  render() {

    const text = this.winning_door() ? 'Winner' : 'Loser';

    return (
      <div className={s.wrapper} onClick={() => this.props.onClick(this.props.winner)}>
        <div className={s.door}>
          <p>
            {text}
          </p>
        </div>
      </div>
    )
  }
}

export default Door;
