import React from 'react';

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

  // editText() {
  //   this.setState({editing: true});
  // }

  // saveText() {
  //   this.setState({editing: false});
  // }

  noteText(evt) {
    this.setState({newText: evt.target.value});
  }




  renderTextForm() {
    return (
      <div className='note'>
        <textarea
          value = {this.state.newText}
          onChange = {this.noteText.bind(this)}></textarea>
        <button onClick = {() => this.setState({editing: false})} >SAVE</button>
      </div>
    );
  }



  renderNote() {
    return (
      <div className='note'>
        <div>{this.state.newText}</div>
          <button
            onClick = {() => this.setState({editing: true})}> EDIT </button>
          <button onClick = {this.props.removeNoteBtn}> DELETE </button>
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
