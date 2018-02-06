import React, { Component } from 'react';
import s from './GameTallies.css';

import WinLoseList from './../WinLoseList';

class GameTallies extends Component {

  render() {
    return (
      <div class={s.wrapper}>
        <h5 class={s.title}>
          Game Tallies!
        </h5>

        <div class={s.tally_wrapper}>
          <WinLoseList classes={s.tally}/>
          <WinLoseList classes={s.tally}/>
        </div>      
      </div>
    )
  }
}

export default GameTallies;
