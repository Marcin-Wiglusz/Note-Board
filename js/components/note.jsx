import React from 'react';
// import ReactDOM from 'react-dom';
import '../../scss/note.scss';

class Note extends React.Component {
  constructor() {
    super();

    this.state = {
      editing: false,
      newText: ''
    }
  }

  // initialEditState(evt) {
  //   this.setState({editing: !this.state.editing})
  //   console.log(evt.target.value);
  // }

  editText() {
    this.setState({editing: true});
  }

  saveText() {
    this.setState({editing: false});
  }

  noteText(evt) {
    this.setState({newText: evt.target.value})
  }


  renderTextForm() {
    return (
      <div className='note'>
        <textarea
          value = {this.state.newText}
          onChange = {this.noteText.bind(this)}></textarea>
        <button onClick = {this.saveText.bind(this)} >SAVE</button>
      </div>
    );
  }

  renderNote() {
    return (
      <div className='note'>
        <h1>{this.state.newText}</h1>
          <button
            value = {this.state.editing}
            onClick = {this.editText.bind(this)}> EDIT </button>
          <button> DELETE </button>
          <p></p>
      </div>
    );
  }



  render() {
    return (this.state.editing)
    ? this.renderTextForm()
    : this.renderNote()
  }
}

export default Note;
