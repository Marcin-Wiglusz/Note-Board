import React from 'react';

import '../../scss/board.scss';
import Note from './note.jsx';

export default class Board extends React.Component {
  constructor() {
    super();

      this.state = {
        notes: ['1Some meeting', '2Shoping list', '3Do some stuff','1Some meeting', '2Shoping list', '3Do some stuff']
      }
  }


  //receiving error without {}
  addNote({note}) {
    let noteArr = this.state.notes;
    console.log(noteArr);
    noteArr.push(note);
    this.setState({notes: noteArr});
  }

  removeNote(i) {
    let noteArr = this.state.notes;
    //delete doesn't change note's index
    delete noteArr[i];
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

  clearAll() {
    this.setState({notes: []})
  }


  render() {

    return (
      <div>
        <div className='board'>
          <nav className='legend'>
            <button
              onClick = {this.addNote.bind(this)}> Add Note
            </button>
            <button
              onClick = {this.clearAll.bind(this)}>Clear Board
            </button>
            <ul>Click Status to toggle between:
              <li>To Do <span></span></li>
              <li>Doing</li>
              <li>Done</li>
            </ul>
            <p>Dragg single no</p>
          </nav>
          {/*maps through state creating 'i' notes from it */}
          {this.state.notes.map(this.createArrNotes.bind(this))}
        </div>
      </div>
    );
  }
}
