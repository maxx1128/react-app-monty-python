import React, { Component } from 'react';

import DoorGroup from './DoorGroup';
import GameTallies from './GameTallies';

class MontyHallGame extends Component {

  render() {
    return (
      <div>
        <p>
          Play the Monty Hall Dilemma! Intro text and next steps go here.
        </p>

        <DoorGroup />

        <GameTallies />
      </div>
    )
  }
}

export default MontyHallGame;
