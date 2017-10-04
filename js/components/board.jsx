import React from 'react';

import '../../scss/board.scss';
import Note from './note.jsx';

class Board extends React.Component {
  constructor() {
    super();

      this.state = {
        notes: ['sdsada', 'sdasdasd']
      }
  }

  // addNote(note) {
  //   const noteArr = this.state.notes;
  //   noteArr.push(note);
  //   this.setState({notes: noteArr});
  // }
  //
  // removeNote = () => {
  //   noteArr.splice(i, 1);
  //   this.setState(notes: noteArr);
  //   console.log(this.state.notes);;
  // }
  //
  // createArrNotes(text, index) {
  //   return <Note
  //           key = {index}
  //           removeNoteBtn = {() => {
  //             console.log('???');}}>
  //          {text} </Note>
  // }

  render() {
    const noteArr = this.state.notes;

    return (
      <div>
        <button onClick = {(note) => {
            noteArr.push(note);
            this.setState({notes: noteArr});
            console.log(noteArr);
          }
        }> + Add Note </button>

        <div className='board'>
          {noteArr.map((text, i) => <Note key = {i}
              removeNoteBtn = {() => {
                console.log(i);
                noteArr.splice(i, 1);
                this.setState(noteArr);
              }
            }>{text}</Note>)}
        </div>
      </div>
    );
  }
}

export default Board;
