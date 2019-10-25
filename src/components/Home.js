import React from 'react';
import { SingleSquabblePage, MySquabbles, NavBar } from '.';
import { connect } from 'react-redux';
import './Home.css';
import Login from './Login';

function Home({ mySquabbles, selectedSquabble, isLoggedIn }) {
  return isLoggedIn ? (
    <div id="home">
      <NavBar />
      <div className="content">
        {selectedSquabble.title ? (
          <SingleSquabblePage squabble={selectedSquabble} />
        ) : (
          <MySquabbles squabbles={mySquabbles} />
        )}
      </div>
    </div>
  ) : (
    <Login />
  );
}

const mapStateToProps = state => ({
  username: state.user.username,
  isLoggedIn: !!state.user.id,
  mySquabbles: state.squabble.mySquabbles,
  selectedSquabble: state.squabble.selectedSquabble,
});

export default connect(mapStateToProps)(Home);
