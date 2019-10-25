import React from 'react';
import { connect } from 'react-redux';
import './Squabble.css';
import { setSelected } from './store';

function SingleSquabble({ squabble, setSelected }) {
  return (
    <div className="single-squabble" onClick={() => setSelected(squabble)}>
      <div className="squabble-title">{squabble.title}</div>
      <div className="user-box">
        {squabble.users.map((user, i) => (
          <div key={i} className="user-info">
            <div className="user-content-line user">{user.name}</div>
            <div className="user-content-line">{user.position}</div>
            <div className="user-content-line">{user.votes}</div>
            <button className="vote-button">VOTE</button>
          </div>
        ))}
      </div>
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  setSelected: squabble => dispatch(setSelected(squabble)),
});

export default connect(
  null,
  mapDispatchToProps
)(SingleSquabble);
