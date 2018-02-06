import React, { Component } from 'react';

class WinLoseList extends Component {
  constructor(props) {
      super(props);
      this.state = {}
   }

  render() {
    return (
      <div className={this.props.classes}>
        <p>
          List of different wins and losses
        </p>

        <ul>
          <li>
            X Wins
          </li>

          <li>
            X Losses
          </li>
        </ul>
      </div>
    )
  }
}

export default WinLoseList;
