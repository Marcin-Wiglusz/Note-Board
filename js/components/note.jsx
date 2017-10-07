import React from 'react';

import '../../scss/note.scss';

class Note extends React.Component {
  constructor() {
    super();

    this.state = {
      editing: false
    }
  }


  editText() {
    this.setState({editing: true});
  }

  saveText() {
    this.props.update(this.refs.refTextVal.value, this.props.index);
    this.setState({editing: false})
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
        <button onClick = {() => this.saveText()} >SAVE</button>
      </div>
    );
  }



  renderNote() {
    return (
      <div className='note'>
        <div>{this.props.children}</div>
          <button onClick = {() => this.editText()}> EDIT </button>
          {/* arrow func allows me to delete exact note, no need to bind(this) */}
          <button onClick = {() => this.remove()}> DELETE </button>
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
