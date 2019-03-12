import React from 'react';
import Roster from './roster';
import { Route } from 'react-router-dom';

export default function Main() {
  return (
    <div className="main">
      <Route path="/roster" component={Roster} />
      <Roster />
    </div>
  );
}
