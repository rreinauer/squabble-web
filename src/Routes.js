import React from 'react';
import Entry from './Entry';
import App from './App';
import { Route, Switch } from 'react-router-dom';

function Routes() {
  return (
    <div id="nav">
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Entry} />
        <Route exact path="/home" component={App} />
      </Switch>
    </div>
  );
}
export default Routes;
