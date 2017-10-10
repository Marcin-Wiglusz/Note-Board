import React from 'react';
import Draggable from 'react-draggable';

import '../../scss/note.scss';

export default class Note extends React.Component {
  constructor() {
    super();

    this.state = {
      editing: false,
      statusColors: ['green', 'red', 'blue'],
      colorIndex : 0,
      backgroundColor: ''
    }
  }

  //styling and displaying components before rendering
  componentWillMount() {
    this.style = {
      right: this.randomDisplay(window.innerWidth - 300, 'px'),
      top: this.randomDisplay(window.innerHeight - 300, 'px')
    }
  }

  randomDisplay(window, px) {
    //note's distance from the edges
    return (Math.ceil(Math.random() * window) + px)
  }


  editText() {
    this.setState({editing: true});
  }

  saveText() {
    //passing new text typed in note's textarea
    this.props.update(this.refs.refTextVal.value, this.props.index);
    this.setState({editing: false})
  }

  remove() {
    this.props.remove(this.props.index)
  }

  // selectText() {
  //   this.select(this.refs.refTextVal.value);
  // }

  noteStatus() {
    let color = this.state.statusColors;
    let colorIndex = this.state.colorIndex;
    this.setState({backgroundColor: color[colorIndex]});
    //incrementing to 2 and going back to 0
    this.state.colorIndex = (colorIndex + 1) % (color.length);

    this.noteColor = {
      backgroundColor: color[colorIndex]
    }
  }


  renderTextForm() {
    return (
      <div className='note'
        style = {Object.assign({}, this.style, this.noteColor)}>
        <textarea autoFocus ref = 'refTextVal'
          defaultValue = {this.props.children}>
        </textarea>
        {/* no need for bind(this) when using fat arrow */}
        <button onClick = {() => this.saveText()} >SAVE</button>
      </div>
    );
  }



  renderNote() {
    return (
      // Object.assign({}) allows to add multiple styles from different func
      <div className='note'
        style = {Object.assign({}, this.style, this.noteColor)}>
        <div className='text'>{this.props.children}</div>
        <div className='btns'>
          <button onClick = {() => this.editText()}> EDIT </button>
          <button onClick = {() => this.remove()}> DELETE </button>
          <button onClick = {() => this.noteStatus()}> STATUS </button>
        </div>
      </div>
    );
  }


  render() {
    return (
      <Draggable>
        {(this.state.editing) ? this.renderTextForm() : this.renderNote()}
      </Draggable>
    )
  }
}
