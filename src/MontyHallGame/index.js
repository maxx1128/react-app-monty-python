import React, { Component } from 'react';
import s from './MontyHallGame.css';

import Door from './Door';
import WinLoseList from './WinLoseList';
import Button from '../Button';

class MontyHallGame extends Component {
  constructor(props) {
    super(props),
    
    this.state = {
      turn: 0,
      selected_door: null,
      winning_door: Math.floor(Math.random() * 3),
      action: null,
      results_stayed: {
        wins: 0,
        losses: 0
      },
      results_switched: {
        wins: 0,
        losses: 0
      }
    }
  }

  select_door = (i) => {
    this.setState({
      turn: 1,
      selected_door: i
    });
  }

  stay_or_switch = () => {
    this.setState({turn: 2});
  }

  restart_game = () => {
    this.setState({
        turn: 0,
        winning_door: Math.floor(Math.random() * 3)
    });
  }

  renderDoor(i) {
    let event_for_turn;

    if (this.state.turn === 0) {
      event_for_turn = this.select_door;
    } else if (this.state.turn === 1) {
      event_for_turn = this.stay_or_switch;
    } else {
      event_for_turn = () => null;
    }

    return (
      <Door
        number={i}
        selected_door={this.state.selected_door}
        winning_door={this.state.winning_door}
        turn={this.state.turn}
        onClick={() => event_for_turn(i)}
      />
    )
  }

  render() {

    return (
      <div>
        <p className={s.text}>
          Play the Monty Hall Dilemma! Intro text and next steps go here.
        </p>

        <ul>
          <li>
            Turn: {this.state.turn}
          </li>
          <li>
            Winning door: {this.state.winning_door}
          </li>
        </ul>

        <div className={s.buttons}>
          <Button
            text="Primary Button"
          />
          <Button
            secondary
            text="Secondary Button"
          />
        </div>

        <div className={s.doors}>
          {this.renderDoor(0)}
          {this.renderDoor(1)}
          {this.renderDoor(2)}
        </div>

        <div className={s.tallies}>
          <WinLoseList
            label="Stayed"
            data={this.state.results_stayed}
          />
          <WinLoseList
            label="Switched"
            data={this.state.results_switched}
          />
        </div>
      </div>
    )
  }
}

export default MontyHallGame;
