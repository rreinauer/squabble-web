import React from 'react';
import './Squabble.css';

function SingleSquabble({ squabble }) {
  return (
    <div className="single-squabble">
      <div>{squabble.title}</div>
      <div className="user-box">
        {squabble.users.map(user => (
          <div className="user-info">
            <div className="user-content-line">{user.name}</div>
            <div className="user-content-line">{user.position}</div>
            <div className="user-content-line">{user.votes}</div>
            <button className="vote-button">VOTE</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleSquabble;
