import React from 'react';

import '../../scss/board.scss';
import Note from './note.jsx';

class Board extends React.Component {
  constructor() {
    super();

      this.state = {
        notes: []
      }
  }

  addNote(text) {
    let noteArr = this.state.notes;
    noteArr.push(text);
    this.setState({notes: noteArr});
  }

  render() {
    return (
      <div className='board'>
        {this.state.notes.map((note, index) => {
          return <Note key = {index}> {note} </Note>
        })}
        <button onClick = {this.addNote.bind(this)} >+</button>
      </div>
    );
  }
}

export default Board;
