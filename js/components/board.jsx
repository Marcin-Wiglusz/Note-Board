import React from 'react';

import '../../scss/board.scss';
import Note from './note.jsx';

export default class Board extends React.Component {
  constructor() {
    super();

      this.state = {
        notes: ['1Some meeting', '2Shoping list', '3Do some stuff']
      }
  }


  //receiving error without {}
  addNote({note}) {
    let noteArr = this.state.notes;
    noteArr.push(note);
    this.setState({notes: noteArr});
  }

  removeNote(i) {
    let noteArr = this.state.notes;
    noteArr.splice(i, 1);
    this.setState({notes: noteArr})
  }

  updateText(newText, i) {
    let noteArr = this.state.notes;
    noteArr[i] = newText;
    this.setState({notes: noteArr})
  }

  createArrNotes(text, i) {
    //passing props
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
        <button onClick = {this.addNote.bind(this)}> + Add Note </button>

        <div className='board'>
          {/*maps through state creating 3 notes from it */}
          {this.state.notes.map(this.createArrNotes.bind(this))}
        </div>
      </div>
    );
  }
}
