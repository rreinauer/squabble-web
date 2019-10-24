import React from 'react';
import NavBar from './NavBar';
import './Home.css';
import MySquabbles from './MySquabbles';
import { squabbles } from './data';

function Home() {
  const [mySquabbles, setSquabbles] = React.useState(squabbles);
  return (
    <div id="home">
      <NavBar />
      <div className="content">
        <MySquabbles squabbles={mySquabbles} />
      </div>
    </div>
  );
}
export default Home;
