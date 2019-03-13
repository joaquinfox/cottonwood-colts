import React from 'react';
import Roster from './roster';
import Schedule from './schedule';
import Home from './home';
import { Route, Switch } from 'react-router-dom';

export default function Main() {
  return (
    <div className="main">
      <Switch>
        <Route path="/roster" component={Roster} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}
