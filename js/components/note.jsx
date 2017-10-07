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

  editText() {
    this.setState({editing: true});
  }

  saveText() {
    this.props.update(this.refs.refTextVal.value, this.props.index);
    this.setState({editing: false});
  }

  remove() {
    this.props.remove(this.props.index)
  }




  renderTextForm() {
    return (
      <div className='note'>
        <textarea
          ref = 'refTextVal'
          defaultValue = {this.props.children}>
        </textarea>
        <button onClick = {this.saveText.bind(this)} >SAVE</button>
      </div>
    );
  }



  renderNote() {
    return (
      <div className='note'>
        <div>{this.props.children}</div>
          <button onClick = {this.editText.bind(this)}> EDIT </button>
          <button onClick = {this.props.remove}> DELETE </button>
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
