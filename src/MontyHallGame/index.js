import React, { Component } from 'react';
import s from './MontyHallGame.css';

import DoorGroup from './DoorGroup';
import WinLoseList from './WinLoseList';
import Button from '../Button';

class MontyHallGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      explanation: "",
      turn: 0,
      selected_door: null,
      opened_door: null,
      switch_door: null,
      winning_door: Math.floor(Math.random() * 3),
      action: null,
      results: {
        stayed: {
          wins: 0,
          losses: 0
        },
        switched: {
          wins: 0,
          losses: 0
        }
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

    return {
      opened: opened_door,
      switch: switch_door
    }
  }

  select_door = (i) => {
    if (this.state.turn === 0) {
      const door_roles  = this.get_door_roles(i),
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
      let   results    = this.state.results;
      const did_switch = (action === "switch") ? true : false,
            final_door = (did_switch) ? this.state.switch_door : this.state.selected_door,
            did_win    = (this.state.winning_door === final_door);

      if (did_switch) {
        (did_win) ? results.switched.wins++ : results.switched.losses++
      } else {
        (did_win) ? results.stayed.wins++ : results.stayed.losses++
      }

      this.setState({
        selected_door: final_door,
        turn: 2,
        results: results
      });
    }
  }

  restart_game = () => {
    if (this.state.turn === 2) {
      this.setState({
        turn: 0,
        selected_door: null,
        opened_door: null,
        switch_door: null,
        winning_door: Math.floor(Math.random() * 3),
        action: null,
      });
    }
  }

  show_game_buttons = () => {
    if (this.state.turn === 1) {
      return (
        <div className={s.buttons}>
          <Button
            text="Stay"
            click_event={() => this.stay_or_switch("stay")}
          />
          <Button
            secondary
            text="Switch"
            click_event={() => this.stay_or_switch("switch")}
          />
        </div>
      );
    } else if (this.state.turn === 2) {
      return (
        <div className={s.buttons}>
          <Button
            text="Play Again"
            click_event={this.restart_game}
          />
        </div>
      );
    }

    return <div className={s.buttons}></div>;
  }

  intro_text = () => {
    let text;
    const turn = this.state.turn;

    if (turn === 0) {
      text = [
        "First turn!",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem enim explicabo, provident id quide."
      ];
    } else if (turn === 1) {
      text = [
        "Second turn!",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est autem dolores rem nam inventore labor."
      ];
    } else if (turn === 2) {
      text = [
        "Third turn!",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam tempore dolore impedit quo."
      ];
    }

    return text.map((p, i) => <p key={i}>{p}</p>);
  }

  render() {
    return (
      <div>
        <DoorGroup
          selected_door={this.state.selected_door}
          winning_door={this.state.winning_door}
          opened_door={this.state.opened_door}
          turn={this.state.turn}
          click_event={this.select_door}
        />

        <div className={s.text}>
          {this.intro_text()}
        </div>

        {this.show_game_buttons()}

        <div className={s.tallies}>
          <WinLoseList
            label="Stayed"
            data={this.state.results.stayed}
          />
          <WinLoseList
            label="Switched"
            data={this.state.results.switched}
          />
        </div>
      </div>
    )
  }
}

export default MontyHallGame;
