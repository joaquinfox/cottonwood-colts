import React from 'react';
import { Route } from 'react-router-dom';
import Player from './player';
import FullRoster from './fullroster';

export default function Roster() {
  return (
    <div className="roster">
      <Route path="/roster" component={FullRoster} />
      <Route path="/roster/:number" component={Player} />
    </div>
  );
}
