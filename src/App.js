import React from 'react';
import { Route } from 'react-router-dom';
import { Entry, Home, Login } from './Components';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Entry />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </div>
  );
}

export default App;
