import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../scss/app.scss';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Hell no</h1>
        <p>any text</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
