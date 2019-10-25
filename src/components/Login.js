import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/squabble2.png';
import './Login.css';
import { auth } from '../store';

function Login({ login }) {
  const [state, setState] = React.useState({
    username: '',
    password: '',
  });

  const handleChange = event => {
    if (event.target.name === 'username') {
      setState({ ...state, username: event.target.value });
    }
    if (event.target.name === 'password') {
      setState({ ...state, password: event.target.value });
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    login(state.username, state.password);
  };
  return (
    <div id="login">
      <img src={logo} alt="logo" id="login-logo" />
      <form id="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={state.username}
          className="form-line"
          placeholder="ENTER USERNAME"
        />

        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={state.password}
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

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(auth(email, password, 'login')),
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
