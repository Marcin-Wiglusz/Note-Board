import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../scss/app.scss';

import Note from './components/note.jsx';
import Board from './components/board.jsx';

class App extends Component {


  render() {
    return (
      <div>
        <Board></Board>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
