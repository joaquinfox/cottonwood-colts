import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Player from './player';
import FullRoster from './fullroster';

export default function Roster() {
  return (
    <div className="roster">
      <Switch>
        <Route exact path="/roster" component={FullRoster} />
        <Route path="/roster/:number" component={Player} />
      </Switch>
    </div>
  );
}
