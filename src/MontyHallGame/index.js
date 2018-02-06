import React, { Component } from 'react';
import s from './MontyHallGame.css';

import DoorGroup from './DoorGroup';
import GameTallies from './GameTallies';
import Button from '../Button';

class MontyHallGame extends Component {

  render() {
    return (
      <div>
        <p class={s.text}>
          Play the Monty Hall Dilemma! Intro text and next steps go here.
        </p>

        <div class={s.buttons}>
          <Button
            text="Primary Button"
          />
          <Button
            secondary
            text="Secondary Button"
          />
        </div>

        <DoorGroup />

        <GameTallies />
      </div>
    )
  }
}

export default MontyHallGame;
