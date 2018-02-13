import React from 'react';
import s from './WinLoseList.css';

const WinLoseList = ({ label, data }) => {

  return (
    <div className={s.list}>
      <p>
        Results when you {label}
      </p>

      <ul>
        <li>
          {data.wins} {data.wins === 1 ? 'Win' : 'Wins'}
        </li>

        <li>
          {data.losses} {data.losses === 1 ? 'Loss' : 'Losses'}
        </li>
      </ul>
    </div>
  );
}

export default WinLoseList;
