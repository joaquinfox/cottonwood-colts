import React from 'react';
import PlayerAPI from '../api';

export default function Player(props) {
  const player = PlayerAPI.get(parseInt(props.match.params.number, 10));

  if (!player) {
    return <div>Sorry, we couldn't find that player</div>;
  }
  return (
    <div className="player">
      <h1>{player.name}</h1>
      This is player
    </div>
  );
}
