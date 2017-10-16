import React from 'react';

import '../styles/board.css';
import Note from './note.jsx';

export default class Board extends React.Component {
  constructor() {
    super();

      this.state = {
        notes: ['Thursday 10 am meeting', 'Book 3 tickets on Knicks game', 'Speeding ticket till Nov 2nd','Return Graves & Marquez to Lib - Nov 22nd', 'New Kadavar coming out on Dec 5th', 'Car insurance expires on Dec 28th']
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
            >{text}</Note>
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
              <li>New Note<span id='blue'></span></li>
              <li>To Do<span id='yellow'></span></li>
              <li>Doing<span id='green'></span></li>
              <li>Done<span id='pink'></span></li>
            </ul>
            <p>Dragg notes to organize them on your board</p>
          </nav>
          {/*maps through state creating 'i' notes from it */}
          {this.state.notes.map(this.createArrNotes.bind(this))}
        </div>
      </div>
    );
  }
}
