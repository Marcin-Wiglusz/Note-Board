import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../scss/app.scss';

import Note from './components/note.jsx';

class App extends Component {


  render() {
    return (
      <div>
        <Note>Hell no</Note>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
