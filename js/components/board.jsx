import React from 'react';

import '../../scss/board.scss';
import Note from './note.jsx';

class Board extends React.Component {
  constructor() {
    super();

      this.state = {
        notes: ['More react', 'Less bulshit', 'Damn']
      }
  }

  // addNote(note) {
  //   const noteArr = this.state.notes;
  //   noteArr.push(note);
  //   this.setState({notes: noteArr});
  // }

    removeNote(i) {
      const noteArr = this.state.notes;
      noteArr.splice(i, 1);
      this.setState({notes: noteArr})
    }

    updateText(newText, i) {
      const noteArr = this.state.notes;
      noteArr[i] = newText;
      this.setState({notes: noteArr})
    }

    createArrNotes(text, i) {
      return <Note
              index = {i}
              key = {i}
              remove = {this.removeNote.bind(this)}
              update = {this.updateText.bind(this)}
              > {text} </Note>
    }


  render() {

    return (
      <div>
        <button> + Add Note </button>

        <div className='board'>
          {this.state.notes.map(this.createArrNotes.bind(this))}
        </div>
      </div>
    );
  }
}

export default Board;
