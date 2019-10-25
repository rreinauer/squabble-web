import React from 'react';
import logo from './squabble2.png';
import Routes from './Routes';
import { Link } from 'react-router-dom';
import './App.css';

function Entry() {
  return (
    <div className="App-entry">
      <Link to="/home">
        <img src={logo} id="logo" alt="squabble" />
      </Link>
    </div>
  );
}

export default Entry;
