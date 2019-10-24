import React from 'react';
import logo from './squabble2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Home.css';

function NavBar() {
  return (
    <div id="nav">
      <FontAwesomeIcon icon={faUser} className="icon" size="lg" />
      <Link to="/home">
        <img src={logo} alt="logo" id="nav-logo" />
      </Link>
      <FontAwesomeIcon icon={faPlus} className="icon" size="lg" />
    </div>
  );
}
export default NavBar;
