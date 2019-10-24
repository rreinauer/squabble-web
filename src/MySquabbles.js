import React from 'react';
import SingleSquabble from './SingleSquabble';
import './Squabble.css';

function MySquabbles({ squabbles }) {
  return (
    <div className="squabble-feed">
      {squabbles.map(squabble => (
        <SingleSquabble squabble={squabble} />
      ))}
    </div>
  );
}

export default MySquabbles;
