import React, { Component } from 'react';

import WinLoseList from './../WinLoseList';

class GameTallies extends Component {

  render() {
    return (
      <div>
        <p>
          Game Tallies!
        </p>

        <WinLoseList />
        <WinLoseList />
      </div>
    )
  }
}

export default GameTallies;
