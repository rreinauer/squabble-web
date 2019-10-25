import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from './squabble2.png';
import './Login.css';

function Login() {
  return (
    <div id="login">
      <img src={logo} alt="logo" id="login-logo" />
      <form id="login-form">
        <input
          type="text"
          name="email"
          className="form-line"
          placeholder="ENTER EMAIL"
        />

        <input
          type="password"
          name="password"
          placeholder="ENTER PASSWORD"
          className="form-line"
        />
        <button type="submit" id="login-btn">
          LOGIN
        </button>
      </form>
      <Link id="new-user-link">New User ?</Link>
    </div>
  );
}

export default Login;
