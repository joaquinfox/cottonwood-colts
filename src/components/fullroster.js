import React from 'react';
import PlayerAPI from '../api';
import { Link } from 'react-router-dom';

export default function FullRoster() {
  return (
    <div className="fullroster">
      <ul>
        {PlayerAPI.all().map(player => (
          <li key={player.number}>
            <Link to={`/roster/${player.number}`}>{player.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
