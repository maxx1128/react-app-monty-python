import React, { Component } from 'react';
import s from './MontyHallGame.css';

import DoorGroup from './DoorGroup';
import WinLoseList from './WinLoseList';
import Button from '../Button';

class MontyHallGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 0,
      selected_door: null,
      opened_door: null,
      switch_door: null,
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

  remove_from_array = (array, element) => {
    const index = array.indexOf(element);
    
    if (index !== -1) {
        array.splice(index, 1);
    }
  }

  get_door_roles = (selected_door) => {
    let opened_door = [0,1,2],
        switch_door = [0,1,2];
    
    const winning_door = this.state.winning_door;

    this.remove_from_array(opened_door, selected_door);
    this.remove_from_array(opened_door, winning_door);
    opened_door = opened_door[0];

    this.remove_from_array(switch_door, selected_door);
    this.remove_from_array(switch_door, opened_door);
    switch_door = switch_door[0];

    console.log(`Switch Door: ${switch_door}`);

    return {
      opened: opened_door,
      switch: switch_door
    }
  }

  select_door = (i) => {
    if (this.state.turn === 0) {
      const door_roles = this.get_door_roles(i),
            opened_door = door_roles.opened,
            switch_door = door_roles.switch;

      this.setState({
        turn: 1,
        selected_door: i,
        opened_door: opened_door,
        switch_door: switch_door
      });
    }
  }

  stay_or_switch = (action) => {
    if (this.state.turn === 1) {
      const will_switch = (action === "switch") ? true : false;

      if (will_switch) {
        this.setState({
          selected_door: this.state.switch_door
        });
      }

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

  show_game_buttons = () => {
    if (this.state.turn > 0) {
      return (
        <div className={s.buttons}>
          <Button
            text="Stay"
            click_action="stay"
            click_event={this.stay_or_switch}
          />
          <Button
            secondary
            text="Switch"
            click_action="switch"
            click_event={this.stay_or_switch}
          />
        </div>
      );
    }

    return <div className={s.buttons}></div>;
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

        {this.show_game_buttons()}

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
