import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { clearSelected } from './store';
import './Squabble.css';

function SingleSquabblePage({ squabble, clearSelected }) {
  return (
    <div className="page">
      <div className="single-squabble">
        <FontAwesomeIcon
          icon={faTimes}
          className="icon close"
          size="lg"
          onClick={() => clearSelected()}
        />
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
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  clearSelected: () => dispatch(clearSelected()),
});
export default connect(
  null,
  mapDispatchToProps
)(SingleSquabblePage);
