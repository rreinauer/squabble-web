import React from 'react';
import { Link, Route } from 'react-router-dom';
import Entry from './Entry';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Entry />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
    </div>
  );
}

export default App;
