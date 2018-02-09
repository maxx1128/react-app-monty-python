import React, { Component } from 'react';
import s from './WinLoseList.css';

class WinLoseList extends Component {
  constructor(props) {
      super(props);
      this.state = {}
   }

  render() {
    return (
      <div className={s.list}>
        <p>
          Results when you {this.props.label}
        </p>

        <ul>
          <li>
            {this.props.data.wins} Wins
          </li>

          <li>
            {this.props.data.losses} Losses
          </li>
        </ul>
      </div>
    )
  }
}

export default WinLoseList;
