import React, { Component } from 'react';
import s from './WinLoseList.css';

const WinLoseList = ({ label, data }) => {

  return (
    <div className={s.list}>
      <p>
        Results when you {label}
      </p>

      <ul>
        <li>
          {data.wins} Wins
        </li>

        <li>
          {data.losses} Losses
        </li>
      </ul>
    </div>
  );
}

export default WinLoseList;
