import React from 'react';
import { SingleSquabblePage, MySquabbles, NavBar } from './Components';
import { connect } from 'react-redux';
import './Home.css';

function Home({ mySquabbles, selectedSquabble }) {
  const [selected, setSelected] = React.useState();

  return (
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
  );
}

const mapStateToProps = state => ({
  mySquabbles: state.squabble.mySquabbles,
  selectedSquabble: state.squabble.selectedSquabble,
});

export default connect(mapStateToProps)(Home);
