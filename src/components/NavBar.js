import React from 'react';
import logo from '../assets/squabble2.png';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Home.css';

function NavBar({ user }) {
  const url = 'https://ibb.co/3SBQ3ZK';
  return (
    <div id="nav">
      <FontAwesomeIcon icon={faUser} className="icon" size="lg" />
      <span>{user.username}</span>
      <Link to="/home">
        <img src={logo} alt="logo" id="nav-logo" />
      </Link>
      <FontAwesomeIcon icon={faPlus} className="icon" size="lg" />
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user,
});
export default connect(mapStateToProps)(NavBar);
