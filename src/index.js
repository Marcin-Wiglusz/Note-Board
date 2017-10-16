import React from 'react';
import ReactDOM from 'react-dom';
// import './app.scss';

import Board from './components/board.jsx';

class App extends React.Component {


  render() {
    return (
      <div>
        <Board></Board>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
