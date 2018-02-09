import React, { Component } from 'react';
import s from './MontyHallGame.css';

import Door from './Door';
import DoorGroup from './DoorGroup';
import WinLoseList from './WinLoseList';
import Button from '../Button';

class MontyHallGame extends Component {
  constructor(props) {
    super(props),
    
    this.state = {
      turn: 0,
      selected_door: null,
      opened_door: null,
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

  get_opened_door = (selected) => {
    let doors = [0,1,2],
        selected_door = doors.indexOf(selected),
        available_doors = doors.splice(selected_door, 1);

    return doors[Math.floor(Math.random()*doors.length)];
  }

  select_door = (i) => {
    if (this.state.turn === 0) {
      this.setState({
        turn: 1,
        selected_door: i,
        opened_door: this.get_opened_door(i)
      });
    }
  }

  stay_or_switch = () => {
    if (this.state.turn === 1) {
      this.setState({turn: 2});
    }
  }

  restart_game = () => {
    if (this.state.turn === 2) {
      this.setState({
        turn: 0,
        winning_door: Math.floor(Math.random() * 3)
      });
    }
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

        <DoorGroup
          selected_door={this.state.selected_door}
          winning_door={this.state.winning_door}
          opened_door={this.state.opened_door}
          turn={this.state.turn}
          click_event={this.select_door}
        />

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
